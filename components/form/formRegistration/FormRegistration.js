import {
	Form,
	Input,
	Checkbox,
	message,
	Button,
	AutoComplete,
	notification,
} from 'antd'
import { useState, useContext } from 'react'
import { registration } from '../../../http/userAPI'
import { MyContext } from '@/contexts/MyContextProvider'

const FormRegistration = ({ handleCancel }) => {
	const [form] = Form.useForm()
	const [isCheck, setIsCheck] = useState(false)
	const { user } = useContext(MyContext)
	const [tel] = useState('')
	const [autoCompleteResult, setAutoCompleteResult] = useState([])

	const [api, contextHolder] = notification.useNotification()
	const openNotificationWithIcon = (type, title, description) => {
		api[type]({
			message: title,
			description: description,
			duration: 10,
		})
	}
	const onWebsiteChange = value => {
		if (!value) {
			setAutoCompleteResult([])
		} else {
			setAutoCompleteResult(['@gmail.com', '@tut.by', '@yandex.by', '@mail.ru'].map((domain) => `${value}${domain}`));
		}
	}
	const websiteOptions = autoCompleteResult.map((website) => ({
		label: website,
		value: website,
	}))
	let count = 0

	const onFinish = values => {
		console.warn("🚀 🚀 🚀  _ file: FormRegistration.js:43 _ onFinish _ values:", values)
		// if (count < 0) {
			registration(values.email, values.password)
				.then(data => {
					console.warn("🚀 🚀 🚀  _ file: FormRegistration.js:47 _ onFinish _ data:", data)
					message.success('Вы зарегистрированны!')
					handleCancel()
					// user.setUserData(data)
					// openNotificationWithIcon('success', 'Подвердите пожалуйта регистрацию', `Вам на почту ${data.login} отправлено письмо с ссылкой для активации аккаунта, перейдите по этой ссылки!`)
					setTimeout(() => { form.resetFields() }, [1000])
				})
				.catch(error => {
					console.warn("🚀 🚀 🚀  _ file: FormRegistration.js:55 _ onFinish _ error:", error)
					if (error) message.error(error)
				})
		// }
		count++
	}
	const onFinishFailed = errorInfo => message.error('Ошибка')
	const onChange = (e) => setIsCheck(e.target.checked)
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
	return (
		<>
			<Form
				layout='vertical'
				name="logIn"
				form={form}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				style={{ overflowX: 'hidden' }}
			>
				<Form.Item
					label="Логин"
					name="email"
					tooltip="Ваша почта"
					hasFeedback
					rules={[
						{
							required: true,
							message: 'Пожалуйста введите почту!',
						},
						{
							type: 'email',
							message: 'Введите корректный email!',
						},
					]}
				>
					<AutoComplete
						options={websiteOptions}
						onChange={onWebsiteChange}
						placeholder="exemple@gmail.com"
					/>
				</Form.Item>
				<Form.Item
					label="Пароль"
					name="password"
					tooltip="минимум 4 символа"
					hasFeedback
					rules={[
						{
							required: true,
							message: 'Пожалуйста введите пароль!',
						},
					]}
				>
					<Input.Password placeholder="мин. 4 символа" />
				</Form.Item>
				<Form.Item
					name="password2"
					label="Повторите пароль"
					dependencies={['password']}
					rules={[
						{
							required: true,
							message: 'Пожалуйста повторите пароль!',
						},
						({ getFieldValue }) => ({
							validator(_, value) {
								if (!value || getFieldValue('password') === value) {
									return Promise.resolve();
								}
								return Promise.reject(new Error('Пароли не совпадают!'));
							},
						}),
					]}
				>
					<Input.Password />
				</Form.Item>
				<Form.Item
					name="soglasen"
					valuePropName="checked"
					rules={[
						{
							validator: (_, value) =>
								value ? Promise.resolve() : Promise.reject(new Error('Нажмите если согласны!')),
						},
					]}
				>
					<Checkbox
						onChange={onChange}
					>
						Входя в аккаунт или создавая новый, вы соглашаетесь на обработку персональных данных в соответствии с политикой и условиями оферты.
					</Checkbox>
				</Form.Item>
				<Form.Item
				>
					<Button
						type="primary"
						htmlType="submit"
						onClick={onFinish}
						size='large'
					>
						Регистрация
					</Button>
				</Form.Item>
			</Form>
			{contextHolder}
		</>
	)
}
export default FormRegistration

