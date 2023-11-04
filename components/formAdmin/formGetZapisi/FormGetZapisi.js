import { Button, Form, DatePicker, message } from 'antd'
import { getDataZapisi } from '../../../http/dataAPI'

const FormGetZapisi = ({ setData }) => {

	const onFinish = (values) => {
		console.log('Success:', values)
		
		getDataZapisi({ start: values.start.$d })
			.then(data => {
				if (data.length) {
					console.log('data: ', data)
					setData(data)
				} else {
					message.warning('Записей нет')
				}
			})
	}

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo)
	}

	return (
		<Form
			name="get-zapisi"
			labelCol={{
				span: 24,
			}}
			wrapperCol={{
				span: 24,
			}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
		>
			<Form.Item
				label="Выберите дату начала записи"
				name="start"
				rules={[
					{
						required: true,
						message: 'Мария выберите дату!',
					},
				]}
			>
				<DatePicker
				// showTime={{
				// 	format: 'HH:mm',
				// 	defaultValue: [moment('09:00:00', 'HH:mm:ss')]
				// }}

				// format="YYYY-MM-DD HH:mm"
				/>
			</Form.Item>
			<Form.Item
				wrapperCol={{
					offset: 8,
					span: 16,
				}}
			>
				<Button type="primary" htmlType="submit">
					Получить
				</Button>
			</Form.Item>
		</Form>
	)
}
export default FormGetZapisi