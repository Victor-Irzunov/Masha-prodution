"use client"
import { Button, Form, Input, Checkbox, Rate, message } from 'antd'
import { HeartOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { createOtzyvy } from '../../http/otzyvyAPI'
import { sendOrderTelegram } from '../../http/telegramAPI'
const { TextArea } = Input
export const FormOtzyvy = ({ setAdd }) => {
	const [isCheck, setIsCheck] = useState(false)
	const [form] = Form.useForm()
	const onFinish = (values) => {
		console.log('Success:', values)

		const formData = {};
		formData.name = values.name || '';
		formData.vozvrast = values.vozvrast || '';
		formData.city = values.city || '';
		formData.tel = values.tel;
		formData.otzyv = values.otzyv;
		formData.rate = values.rate;


		let messageForm = `<b>Отзыв с сайта irzunova.by:</b>\n`;
		messageForm += `<b>Имя: </b> ${values.name}\n`;
		messageForm += `<b>--------------- </b>\n`;
		messageForm += `<b>Телефон:</b> ${values.tel}\n`;
		messageForm += `<b> </b>\n`;
		messageForm += `<b>Отзыв: ${values.otzyv} </b>\n`;
		messageForm += `<b>Перейти на сайт: <a href="https://irzunova.by">irzunova.by</a> </b>\n`;


		createOtzyvy(formData)
			.then(data => {
				if (data) {
					message.success(data.message)
					form.resetFields()
					sendOrderTelegram(messageForm)
				}
			})
	}
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo)
	}
	const onChange = (e) => {
		console.log(`checked = ${e.target.checked}`);
		setIsCheck(e.target.checked)
	};
	return (
		<Form
			name="otzyvy"
			labelCol={{
				span: 24,
			}}
			wrapperCol={{
				span: 24,
			}}
			form={form}
			initialValues={{
				remember: false,
			}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
		>
			<Form.Item
				label="Имя"
				name="name"
				rules={[
					{
						required: true,
						message: 'Напишите своё имя!',
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Ваш возраст"
				name="vozvrast"
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Город"
				name="city"
				rules={[
					{
						required: true,
						message: 'Напишите свой город!',
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="Телефон"
				name="tel"
				tooltip='Публиковаться не будет.'
				rules={[
					{
						required: true,
						message: 'Пожалуйста свой введите номер телефона!',
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="Отзыв"
				name="otzyv"
				rules={[
					{
						required: true,
						message: 'Пожалуйста напишите отзыв!',
					},
				]}
			>
				<TextArea
					placeholder=""
					autoSize={{
						minRows: 3,
					}}
				/>
			</Form.Item>
			<Form.Item
				label="Ваша оценка"
				name="rate"
				rules={[
					{
						required: true,
						message: 'Пожалуйста оцените!',
					},
				]}
			>
				<Rate allowHalf character={<HeartOutlined />} style={{ color: '#f80759' }} />
			</Form.Item>

			<Form.Item
				name="client"
				valuePropName="checked"
				wrapperCol={{
					offset: 2,
					span: 16,
				}}
			>
				<Checkbox onChange={onChange}>Я Ваш клиент</Checkbox>
			</Form.Item>

			<Form.Item
				wrapperCol={{
					offset: 8,
					span: 16,
				}}
			>
				<Button type="primary"
					htmlType="submit"
					disabled={!isCheck}
				>
					Отправить
				</Button>
			</Form.Item>
			<p className='text-[12px]'>За оставленый отзыв я дарю клиенту 10% скидку на все последующие консультации!</p>
			<p className='underline' onClick={() => setAdd(false)}>скрыть форму</p>
		</Form>
	)
}
