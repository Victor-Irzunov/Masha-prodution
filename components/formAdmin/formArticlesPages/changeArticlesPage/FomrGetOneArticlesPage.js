import { useState } from 'react'
import {
	Button,
	Form, Input, message
} from 'antd'
// import parse from 'html-react-parser'
import { getOneArticle } from '../../../../http/articleAPI'
// import ReactEditor from '../../../react-quill/ReactEditor'
import FormChangeArticlesPage from './FormChangeArticlesPage'

function FomrGetOneArticlesPage() {
	const [article, setArticle] = useState({})
	const [value, setValue] = useState('')
	const [form] = Form.useForm()

	const onFinish = values => {
		getOneArticle({ id: values.id })
			.then(data => {
				if (Object.keys(data).length > 1) {
					setArticle(data)
					setValue(data.article)
				} else {
					message.warning(data.message)
				}
				// form.resetFields()
			})
	}
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo)
	}

	return (
		<div>
			<Form
				name="getOne"
				form={form}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<div className='flex flex-col'>
					<Form.Item
						name="id"
						label='Введите id статьи'
						rules={[{
							required: true,
							message: 'Введите id!',
						},]}
					>
						<Input placeholder="" />
					</Form.Item>

					<Form.Item
					>
						<Button type="primary" htmlType="submit">
							Получить
						</Button>
					</Form.Item>

				</div>
			</Form>

			{
				Object.keys(article).length ?
					<FormChangeArticlesPage article={article} />
					:
					undefined
			}
		</div>
	)
}

export default FomrGetOneArticlesPage