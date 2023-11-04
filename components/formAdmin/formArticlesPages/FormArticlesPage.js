import { Button, Form, Input, InputNumber, message, DatePicker, Upload, Radio } from 'antd'
// import { useState } from 'react'
import { ClearOutlined, UploadOutlined } from '@ant-design/icons'
import ReactEditor from '../../react-quill/ReactEditor'
import { createArticle } from '../../../http/articleAPI'
import Resizer from "react-image-file-resizer"
import moment from 'moment'
import { useState } from 'react'

const resizeFile = (file, size, size2, quality = 75) =>
	new Promise((resolve) => {
		Resizer.imageFileResizer(
			file,
			size,
			size2,
			"WEBP",
			quality,
			0,
			(uri) => {
				resolve(uri)
			},
			"file",
		)
	})
const FormArticlesPage = () => {
	// const [isClearForm, setIsClearForm] = useState(false)
	const [value, setValue] = useState('')
	const [form] = Form.useForm()
	const onFinish = async (values) => {
		console.log('Success:', values)

		try {
			const formData = new FormData();
			formData.append('link', values.link);
			formData.append('article', values.article);
			formData.append('publication', values.publication);
			formData.append('view', values.view);
			formData.append('group', values.group);
			formData.append('description', values.description);
			formData.append('like', values.like);
			// formData.append('dateTime', moment(new Date(values.dateTime.$d)).format('YYYY-MM-DD HH:mm:ss'));
			formData.append('dateTime', new Date(values.dateTime.$d).toISOString());
			for (let i = 0; i < values.img.fileList.length; i++) {
				const file = values.img.fileList[i].originFileObj;
				formData.append('img', file);
			}
			createArticle(formData)
				.then(data => {
					message.success(data.message);
				})
				.catch(error => {
					console.error('Error saving data:', error);
					message.error('Ошибка!');
				});

		} catch (error) {
			console.error('Error saving data:', error);
			message.error('Ошибка!');
		}

	}
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo)
	}
	const fuClearForm = () => {
		form.resetFields()
	}
	return (
		<>
			{/* {isClearForm && <Button type='text' onClick={fuClearForm} className='text-right'><ClearOutlined className='mr-2' />Очистить форму</Button>} */}
			<Form
				name="info-pages"
				labelCol={{
					span: 24,
				}}
				wrapperCol={{
					span: 24,
				}}
				initialValues={{
					publication: true
				}}
				form={form}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item
					label="Введите название ссылки меню"
					name="link"
					rules={[
						{
							required: true,
							message: 'Введите название ссылки меню!',
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Введите описание"
					name="description"
				rules={[
					{
						required: true,
						message: 'Введите описание!',
					},
				]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Загрузите фото"
					name="img"
					rules={[
						{
							required: true,
							message: 'Загрузите картинку!',
						},
					]}
				>
					<Upload
						listType="picture"
						className="upload-list-inline"
						maxCount={1}
						beforeUpload={() => false}
					>
						<Button icon={<UploadOutlined />}>Загрузить</Button>
					</Upload>
				</Form.Item>

				<Form.Item
					label="Введите начальное количество просмотров"
					name="view"
					rules={[
						{
							required: true,
							message: 'Введите количество просмотров!',
						},
					]}
				>
					<InputNumber />
				</Form.Item>

				<Form.Item
					label="Введите начальное количество лайков"
					name="like"
					rules={[
						{
							required: true,
							message: 'Введите количество лайков!',
						},
					]}
				>
					<InputNumber />
				</Form.Item>
				<Form.Item
					label="Выберите тему статьи"
					name='group'
					rules={[
						{
							required: true,
							message: 'Пожалуйста выберите консультацию!',
						},
					]}
				>
					<Radio.Group>
						<Radio.Button value="1">Бесплодие</Radio.Button>
						<Radio.Button value="2">Семейный психолог</Radio.Button>
						<Radio.Button value="3">Женский психолог</Radio.Button>
						<Radio.Button value="4">Депрессия</Radio.Button>
						<Radio.Button value="5">Подростоковый психолог</Radio.Button>
						<Radio.Button value="6">Клинический психолог</Radio.Button>
						<Radio.Button value="7">Перинаталный психолог</Radio.Button>
						<Radio.Button value="8">Индивидуальная консультация</Radio.Button>
					</Radio.Group>
				</Form.Item>

				<Form.Item
					label="Введите дату"
					name="dateTime"
					rules={[
						{
							required: true,
							message: 'Введите дату!',
						},
					]}
				>
					<DatePicker
						showTime={{
							format: 'HH:mm',
						}}
						format="YYYY-MM-DD HH:mm"
					/>
				</Form.Item>
				<Form.Item
					label="Введите контент страницы"
					name="article"
					rules={[
						{
							required: true,
							message: 'Введите контент страницы!',
						},
					]}
				>
					<ReactEditor
						value={value}
						setValue={setValue}
					/>
				</Form.Item>
				<Form.Item
					label=""
					name="publication"
				>
					<Radio.Group defaultValue={true}>
						<Radio.Button value={true}>опубликовать</Radio.Button>
						<Radio.Button value={false}>не опубликовывать</Radio.Button>

					</Radio.Group>
				</Form.Item>

				<Form.Item
				// wrapperCol={{
				// 	offset: 16,
				// }}
				>
					<Button type="primary" htmlType="submit">
						Сохранить статью
					</Button>
				</Form.Item>
			</Form>
		</>
	)
}
export default FormArticlesPage