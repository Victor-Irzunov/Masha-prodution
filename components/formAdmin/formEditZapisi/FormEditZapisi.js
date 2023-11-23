"use client"
import { Button, DatePicker, Form, Input, message, Checkbox, Divider, Popconfirm, Select, Radio } from 'antd'
import InputMask from 'react-input-mask'
import { useState, useContext } from 'react'
import { MyContext } from '../../../contexts/MyContextProvider'
import { MinusOutlined, DeleteOutlined } from '@ant-design/icons'
import { observer } from 'mobx-react-lite'
import FormGetZapisi from '../formGetZapisi/FormGetZapisi'
import moment from 'moment'
import { deleteOneZapisi, editDataZapisi } from '../../../http/dataAPI'

const { RangePicker } = DatePicker
const { TextArea } = Input



const FormEditZapisi = observer(() => {
	const [form] = Form.useForm()
	const [tel, setTel] = useState('')
	const { dataApp } = useContext(MyContext)
	const [data, setData] = useState([])

	const beforeMaskedValueChange = (newState, oldState, userInput) => {
		var { value } = newState
		var selection = newState.selection
		var cursorPosition = selection ? selection.start : null
		if (value.endsWith('-') && userInput !== '-' && !tel.endsWith('-')) {
			if (cursorPosition === value.length) {
				cursorPosition--
				selection = { start: cursorPosition, end: cursorPosition }
			}
			value = value.slice(0, -1)
		}
		return {
			value,
			selection
		}
	}

	const onFinish = (values) => {
		console.log('Success:', values)

		// const formData = new FormData()
		// formData.append('zapros', values.zapros)
		// if (values.date) {
		// 	formData.append('start', values.date[0].$d)
		// 	formData.append('end', values.date[1].$d)
		// }
		// formData.append('tel', values.tel)
		// formData.append('title', values.title)
		// formData.append('allDay', values.allDay)
		// formData.append('type', values.type)
		// formData.append('id', values.id)

		const formData = {};

		formData.zapros = values.zapros;

		if (values.date) {
			formData.start = values.date[0].$d;
			formData.end = values.date[1].$d;
		}

		formData.tel = values.tel;
		formData.title = values.title;
		formData.allDay = values.allDay;
		formData.type = values.type;
		formData.id = values.id;


		editDataZapisi(formData)
			.then(data => {
				if (data) {
					console.log("🚀 🚀 🚀  _ file: FormEditZapisi.js:74 _ onFinish _ data:", data)
					dataApp.setResDataZapisi(data)
					message.success('Запись изменена')
				}
			})
	}

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo)
	}

	const deleteOneZapis = id => {
		deleteOneZapisi(id)
			.then(res => {
				if (res) {
					dataApp.setResDataZapisi(res)
					setData(data => data.filter(el => el.id !== id))
					message.success('Запись удалена')
				}
			})
	}

	return (
		<>
			<FormGetZapisi setData={setData} />
			<Divider />
			{data.length ? data.map((el, idx) => {
				return (
					<div key={el.id}>

						<p>Запись №{idx + 1}</p>
						<Form
							name="zapisi-edit"
							labelCol={{
								span: 24,
							}
							}
							wrapperCol={{
								span: 24,
							}}
							style={{
								maxWidth: 600,
								paddingBottom: '1.5em'
							}}
							initialValues={{
								allDay: el.allDay,
								title: el.title,
								tel: el.tel,
								id: el.id,
								zapros: el.zapros,
								type: el.type,
							}}
							onFinish={onFinish}
							onFinishFailed={onFinishFailed}
							autoComplete="off"
						>

							<Form.Item
								label="Изменить название"
								name="title"
							>
								<TextArea placeholder="" autoSize />
							</Form.Item>

							<Form.Item
								hidden={true}
								name='id'
							>
								<Input />
							</Form.Item>

							<Form.Item
								name="tel"
								label="Изменить телефон"
							>
								<InputMask
									className='ant-input p-1 rounded-md'
									value={tel}
									onChange={(e) => setTel(e.target.value)}
									mask="+3\7\5 99 999 99 99"
									maskChar={'-'}
									placeholder='+375 44 111-11-11'
									beforeMaskedValueChange={beforeMaskedValueChange}
									style={{
										width: '100%',
									}}
								/>
							</Form.Item>

							<Divider />

							<p className='mb-0'>Время записи:</p>
							<span className='font-semibold'>
								{moment(el.start).format("YYYY-MM-DD hh:mm:ss ").toLocaleString('ru_RU')}
							</span>
							<span> <MinusOutlined /> </span>
							<span className='font-semibold'>{moment(el.end).format("YYYY-MM-DD hh:mm:ss ")}</span>
							<br />
							<br />

							<Form.Item
								name="date"
								label='Изменить время записи'
							>
								<RangePicker
									showTime={{
										format: 'HH:mm',
									}}
									format="YYYY-MM-DD HH:mm"
								/>
							</Form.Item>


							


							<Form.Item
								label="Выберите тип консультации"
								name='zapros'
							>
								<Select>
									<Select.Option value="индивидуальная">индивидуальная консультация</Select.Option>
									<Select.Option value="семейная">семейная консультация</Select.Option>
									<Select.Option value="перинатальный">консультация перинатального психолога</Select.Option>
									<Select.Option value="подросток">подростковый психолог</Select.Option>
								</Select>
							</Form.Item>


							<Form.Item
								name="type"
								label='Выберите формат консультации'
							>
								<Radio.Group>
									<Radio.Button value="online">онлайн</Radio.Button>
									<Radio.Button value="offline">в кабинете</Radio.Button>
								</Radio.Group>

							</Form.Item>




							<Form.Item
								name="allDay"
								valuePropName="checked"
								wrapperCol={{
									offset: 8,
									span: 16,
								}}
							>
								<Checkbox>Весь день</Checkbox>
							</Form.Item>

							<div className='flex justify-between'>
								<Popconfirm
									title="Удалить запись"
									description="Мария Вы точно хотите удалить запись?"
									onConfirm={() => deleteOneZapis(el.id)}
									okText="Да"
									cancelText="Нет"
								>
									<button
										className='text-red-600 pb-4'
										type='text'
									>
										<DeleteOutlined className='mr-2' />
										удалить
									</button>
								</Popconfirm>

								<Form.Item
								>
									<Button
										type="primary"
										htmlType="submit"
										className='bg-lime-600'
									>
										Изменить запись
									</Button>
								</Form.Item>
							</div>
						</Form >
						<Divider />
					</div>
				)

			})
				:
				null
			}
		</>
	)

})
export default FormEditZapisi
