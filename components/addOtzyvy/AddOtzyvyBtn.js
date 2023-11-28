"use client"
import { useState } from "react";
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Popover, Button} from 'antd'
import { FormOtzyvy } from '../../components/form/FormOtzyvy'
import Image from 'next/image';

const AddOtzyvyBtn = () => {
	const [add, setAdd] = useState(false)

	const content = (
		<div>
			<p>Отзыв будет опубликован только если это отзыв клиента и после проверки администратора.</p>
		</div>
	)

	return (
		<div className=''>
			<div className='mt-14 px-10'>
				<div
					style={{
						marginBottom: 16,
					}}
					className='flex items-center justify-end'
				>

					<Popover content={content} title={<div className='text-center'><ExclamationCircleOutlined className='text-2xl text-green-600 ml-6' /></div>} trigger="click">
						<Image src='/images/Info.svg' className='mr-3' alt='Информация' width={30} height={30} />
					</Popover>
					<Button onClick={() => setAdd(true)}>Добавить отзыв</Button>
				</div>
			</div>

			{

				add &&
				<div className='px-10'>
					<FormOtzyvy setAdd={setAdd} />
				</div>
			}
		</div>
	)
}

export default AddOtzyvyBtn;