"use client"
import { Button, DatePicker, Form, Input, message, Checkbox, Select, Radio } from 'antd'
import InputMask from 'react-input-mask'
import { useState, useContext } from 'react'
import { MyContext } from '../../../contexts/MyContextProvider'
import { createDataZapisi } from '../../../http/dataAPI'
import moment from 'moment'

const { RangePicker } = DatePicker
const { TextArea } = Input



const FormZapisi = () => {
	const [form] = Form.useForm()
	const [tel, setTel] = useState('')
	const { dataApp } = useContext(MyContext)

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

		
		const formData = {
			zapros: values.zapros,
			start: values.date[0].$d,
			end: values.date[1].$d,
			tel: values.tel,
			title: values.title,
			allDay: values.allDay,
			type: values.type
		}

		createDataZapisi(formData)
			.then(data => {
				if (data.message) {
					message.warning(data.message)
				} else {
					message.success('Запись добавлена')
					dataApp.setResDataZapisi(data)
				}
			})
	}
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo)
	}

	return (
		<Form
			name="zapisi"
			labelCol={{
				span: 24,
			}}
			wrapperCol={{
				span: 24,
			}}
			style={{
				maxWidth: 600,
			}}
			initialValues={{
				allDay: false,
			}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
		>
			<Form.Item
				label="Название"
				name="title"
				rules={[
					{
						required: true,
						message: 'Пожалуйста напишите название!',
					},
				]}
			>
				<TextArea placeholder="" autoSize />
			</Form.Item>


			<Form.Item
				name="tel"
				label="Телефон"
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
				name="date"
				label='Выберите начало и конец события'
				tooltip="Мария необходимо указать дату и время начала и конца события."
				rules={[
					{
						required: true,
						message: 'Мария укажите дату события!',
					},
				]}
			>
				<RangePicker
					showTime={{
						format: 'HH:mm',
						defaultValue: [moment('09:00:00', 'HH:mm:ss'), moment('09:00:00', 'HH:mm:ss')]
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
				<Radio.Group
				// defaultValue="online"
				>
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

			<Form.Item
				wrapperCol={{
					offset: 8,
					span: 16,
				}}
			>
				<Button
					type="primary"
					htmlType="submit"
					className='bg-lime-600'
				>
					Создать запись
				</Button>
			</Form.Item>
		</Form>
	)
}
export default FormZapisi
