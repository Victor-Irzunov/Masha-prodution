import { useContext } from 'react'
import { observer } from "mobx-react-lite"
import { Button, Divider, Empty, Form, Input, message, Radio } from 'antd'
import moment from 'moment'
import { changeOtzyvy } from '../../../http/otzyvyAPI'
import { MyContext } from '../../../contexts/MyContextProvider'

const { TextArea } = Input

export const MailComp = observer(() => {
	const { dataApp } = useContext(MyContext)

	const onFinish = (values) => {
		console.log('Success:', values)

		const formData = {};
		formData.response = values.response;
		formData.isPublication = values.isPublication;
		formData.id = values.id;

		changeOtzyvy(formData)
			.then(data => {
				message.success(data.message)
				dataApp.setNewOtzyvy(dataApp.dataNewOtzyvy.filter(el => el.id !== values.id))
			})
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	}


	return (
		<div>
			{dataApp.dataNewOtzyvy.length ?
				dataApp.dataNewOtzyvy.map(el => {
					return (
						<div key={el.id} className='font-light'>
							<p className='font-semibold text-lg'>Новый отзыв id:{el.id}</p>
							<p>
								{el.otzyv}
							</p>
							<p>Написала: {el.name}</p>
							<p>Возраст: {el.vozvrast}</p>
							<p>Город: {el.city}</p>
							<p>
								Был написан: {moment(el.createdAt).startOf().fromNow()}
							</p>
							<p>Поставила рейтинг: {el.rate}</p>
							<p>
								Телефон: {el.tel}
							</p>

							<Divider />

							<Form
								name="basic"
								labelCol={{
									span: 24,
								}}
								wrapperCol={{
									span: 24,
								}}
								initialValues={{
									isPublication: true,
									id: el.id,
								}}
								onFinish={onFinish}
								onFinishFailed={onFinishFailed}
								autoComplete="off"
							>
								<Form.Item
									label="Ваш ответ на отзыв"
									name="response"
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
									name="isPublication"
								>
									<Radio.Group>
										<Radio.Button value={true}>Опубликовать</Radio.Button>
										<Radio.Button value={false}>Не опубликовывать</Radio.Button>
									</Radio.Group>
								</Form.Item>

								<Form.Item
									wrapperCol={{
										offset: 8,
										span: 16,
									}}
								>
									<Button type="primary" htmlType="submit">
										Сохранить
									</Button>
								</Form.Item>
							</Form>
						</div>
					)

				})
				:
				<Empty />

			}


		</div>


	)
})
