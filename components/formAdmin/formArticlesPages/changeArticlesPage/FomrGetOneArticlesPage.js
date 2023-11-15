"use client"
import { useState } from 'react'
import {
	Button,
	Form, Input, message
} from 'antd'
import { getOneArticle } from '../../../../http/articleAPI'
import FormChangeArticlesPage from './FormChangeArticlesPage'

const FomrGetOneArticlesPage = () => {
	const [article, setArticle] = useState({})
	const [form] = Form.useForm()

	const onFinish = values => {
		getOneArticle({ id: values.id })
			.then(data => {
				if (Object.keys(data).length > 1) {
					setArticle(data)
				} else {
					message.warning(data.message)
				}
			})
	}
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo)
	}
	return (
		<>
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
		</>
	)
}

export default FomrGetOneArticlesPage