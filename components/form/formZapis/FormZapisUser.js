import { useState, forwardRef, useContext } from 'react'
import { Button, Select, Form, Input, Space, Radio, message } from 'antd'
import InputMask from 'react-input-mask'
import { createDataZapisi } from '../../../http/dataAPI'
import { MyContext } from '../../../contexts/MyContextProvider'
import ModalComp from '../../modal/ModalComp'
import moment from 'moment'

const FormZapisUser = forwardRef(({ value, setOpen, setValue }, ref) => {
	const [form] = Form.useForm()
	const [tel, setTel] = useState('')
	const [valueSelect, setValueSelect] = useState('')
	const { dataApp } = useContext(MyContext)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [dataModal, setDataModal] = useState({})
	const showModal = () => {
		setIsModalOpen(true)
	}
	const onFinish = (values) => {
		console.log('++Success:', values)
		setDataModal({ ...dataModal, name: values.name, start: value, type: values.type })
		
		const formData = {};
		formData.zapros = values.zapros;
		formData.start = value;
		formData.end = moment(value).add(120, 'm').toDate();
		formData.tel = values.tel;
		formData.title = values.name;
		formData.type = values.type;

		createDataZapisi(formData).then(data => {
			if (data) {
				dataApp.setResDataZapisi(data)
				message.success('Вы записаны')

				setTimeout(() => {
					showModal()
					// navigate('/')
					form.resetFields()
				}, 300)
			}
		})
	}


	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	}

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

	const onChangeSelect = value => {
		setValueSelect(value)
	}


	return (
		<>
			<ModalComp
				setIsModalOpen={setIsModalOpen}
				isModalOpen={isModalOpen}
				title=""
				data={dataModal}
				setOpen={setOpen}
				setValue={setValue}
				resul={true}
			/>
			<Form
				name="zapis"
				form={form}
				labelCol={{ span: 24 }}
				wrapperCol={{ span: 24 }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			// initialValues={{
			// 	type: 'online'
			// }}
			>
				<Space wrap>
					<Form.Item
						label="Имя"
						name="name"
						rules={[
							{
								required: true,
								message: 'Напишите пожалуйста Ваше имя!',
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						name="tel"
						label="Телефон"
						rules={[
							{
								required: true,
								message: 'Пожалуйста введите Ваш телефон!',
							},
						]}
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

					<Form.Item
						label="Выберите тип консультации"
						name='zapros'
						rules={[
							{
								required: true,
								message: 'Пожалуйста выберите консультацию!',
							},
						]}
					>
						<Select onChange={onChangeSelect}>
							<Select.Option value="индивидуальная">индивидуальная консультация</Select.Option>
							<Select.Option value="семейная">семейная консультация</Select.Option>
							<Select.Option value="перинатальный">консультация перинатального психолога</Select.Option>
							<Select.Option value="подросток">подростковый психолог</Select.Option>
						</Select>
					</Form.Item>


					<Form.Item
						name="type"
						tooltip='Оналайн консультация проходит через телефон или компьютер, удобный и продуктивный способ. Для консультации в кабинете Вам необходимо будет подъехать по адресу ул. П.Мстиславца 20.'
						label='Выберите удобный формат консультации'
						rules={[
							{
								required: true,
								message: 'Пожалуйста выберите формат!',
							},
						]}
					>
						<Radio.Group>
							<Radio.Button value="online">онлайн</Radio.Button>
							<Radio.Button value="offline">в кабинете</Radio.Button>
						</Radio.Group>

					</Form.Item>
				</Space>

				<div className='mb-10'>
					<p className='mb-0'>{`Запись на: ${value ? value.toLocaleDateString("ru-RU") : ''} в ${value ? value.toLocaleTimeString("ru-RU") : ''}`}</p>
					<p className='mb-0'>Стоимость консультации: {valueSelect === 'семейная' ? '120,00 руб' : '96,00 руб'}</p>
					<p className='text-xs'>Продолжительность консультации: {valueSelect === 'семейная' ? '1 час 30 минут' : '1 час'}</p>

				</div>

				<Form.Item>
					<Button type="primary"
						htmlType="submit"
						className='uppercase pb-0.5 shadow-lg'
						ref={ref}
					>
						записаться
					</Button>
				</Form.Item>
			</Form>
		</>
	)
})
export default FormZapisUser