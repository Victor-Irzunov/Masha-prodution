"use client"
import { Checkbox, Form, Input, Select } from 'antd'
import React, { useState } from 'react'

import InputMask from 'react-input-mask'
import { useScreens } from '../../../constans/constScreens'

const { Option } = Select
const { TextArea } = Input

const plainOptions = ['Ответить в Telegram', 'Pear', 'Orange'];

const select = [
	{
		value: 'Не могу родить',
		id: 1

	},
	{
		value: 'Проблемы в семейных отношениях',
		id: 2
	},
	{
		value: 'Проблемы с ребенком',
		id: 3
	},
	{
		value: 'В жизне все плохо',
		id: 4
	},
	{
		value: 'Нужна помощь',
		id: 5
	},
	{
		value: 'Помочь решить проблемы',
		id: 6
	},
	{
		value: 'Больше не могу',
		id: 7
	},
]


const FormMainPage = () => {
	const [tel, setTel] = useState('')
	const screens = useScreens()
	const onFinish = (values) => {
		console.log('Success:', values);
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


	return (
		<Form
			name="basic"
			labelCol={{
				span: 24,
			}}
			wrapperCol={{
				span: 24,

			}}
			// style={{
			// 	maxWidth: 600,
			// }}
			// initialValues={{
			// 	remember: true,
			// }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"

		>
			<Form.Item
				label={<label className='text-white font-light'>Что Вас беспокоит ?</label>}
				name="select"

			>
				<Select
					placeholder="Выберите.."
					allowClear
				>
					{select.map(el => {
						return (
							<Option
								value={el.value}
								key={el.id}
							>
								{el.value}
							</Option>
						)
					})}
				</Select>
			</Form.Item>

			<Form.Item
				label={<label className='text-white font-light'>Ваше имя</label>}
				name="name"
			>
				<Input
				// className='bg-transparent border-t-0 border-l-0 border-r-0 text-white rounded-none'

				/>
			</Form.Item>

			<Form.Item
				label={<label className='text-white font-light'>Телефон</label>}
				name="tel"
				tooltip="код оператора и номер"
				rules={[
					{
						required: true,
						message: 'Пожалуйста введите номер!',
					},
				]}
			>
				<InputMask
					placeholder="+375 29 123-45-67"
					mask="+3\7\5 99 999 99 99"
					maskChar={'-'}
					className='border py-1 px-5 rounded-md w-full'
					beforeMaskedValueChange={beforeMaskedValueChange}
					value={tel}
					onChange={(e) => setTel(e.target.value)}
				/>

			</Form.Item>

			<Form.Item
				label={<label className='text-white font-light'>Сообщение</label>}
				name="message"
				tooltip=""
			>
				<TextArea
					placeholder="Сообщение"
					autoSize={{
						minRows: 5,
					}}
				/>
			</Form.Item>

			<Form.Item
				label={<label className='text-white font-light sd:mb-6 xy:mb-2'>Выберите способ обратной связи</label>}
				name="contact"
				valuePropName="checked"
			>
				<Checkbox.Group className='flex xy:flex-col sd:flex-row'>
					<Checkbox value='Перезвонить' className=''><p className='text-white font-light'>Перезвонить</p></Checkbox>
					<Checkbox value='Ответить в Telegram'><p className='text-white font-light'>Ответить в Telegram</p></Checkbox>
					<Checkbox value='Ответить в WhatsApp'><p className='text-white font-light'>Ответить в WhatsApp</p></Checkbox>
					<Checkbox value='Ответить в Viber'><p className='text-white font-light'>Ответить в Viber</p></Checkbox>
				</Checkbox.Group>
			</Form.Item>

			<Form.Item
				wrapperCol={
					screens.md ?
						{
							offset: 16,
							span: 24,
						}
						:
						{
							span: 24
						}
				}
			>
				<button
					htmltype="submit"
					className='bg-transparent'
				>
					<div className='w-36 h-36 
					border rounded-full flex
					justify-start items-center
					 text-white
					 duration-700
					 hover:bg-white
					 hover:text-black
					 '>
						<span className='font-light tracking-widest'>Отправить сообщение</span>
					</div>

				</button>
			</Form.Item>
		</Form>
	)
}
export default FormMainPage