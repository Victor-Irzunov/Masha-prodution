"use client"
import { Collapse, Drawer } from 'antd'
import {
	FormOutlined, EditOutlined, MailOutlined
} from '@ant-design/icons'
import CalendarComp from '../../components/Calendar/CalendarComp'
import FormArticlesPage from '../../components/formAdmin/formArticlesPages/FormArticlesPage'
import FomrGetOneArticlesPage from '../../components/formAdmin/formArticlesPages/changeArticlesPage/FomrGetOneArticlesPage'
import { useContext, useState } from 'react'
import { MyContext } from '../../contexts/MyContextProvider'
import { MailComp } from '../../components/form/mailFormComp/MailComp'
import { observer } from 'mobx-react-lite'


const AdminPage = observer(() => {
	const { user, newOtzyvy } = useContext(MyContext)
	const [open, setOpen] = useState(false)

	const showDrawer = () => {
		setOpen(true)
	}
	const onClose = () => {
		setOpen(false)
	}

	const items = [
		{
			key: '1',
			label: 'Добавить статью',
			children: <FormArticlesPage />,
			extra: <FormOutlined className='text-xl text-lime-600 ml-1' />,
		},
		{
			key: '2',
			label: 'Изменить статью',
			children: <FomrGetOneArticlesPage />,
			extra: <EditOutlined className='text-xl text-rose-600 ml-1' />,
		},
	];


	return (
		<section className='pb-28 px-5'>
			{
				newOtzyvy ?
					<div className='fixed top-3 left-6 animate-bounce'>
						{
							user?.userData?.isAdmin &&
							<MailOutlined
								className='text-lime-600 text-4xl'
								onClick={showDrawer}
							/>
						}
					</div>
					:
					null
			}
			<div className=''>
				<p className='text-2xl mt-8 mb-8'>Страница администратора</p>
				<CalendarComp />
				<Collapse accordion bordered={false} items={items} />
			</div>
			<Drawer title="Мария Вам сообщение" placement="right" onClose={onClose} open={open}>
				<MailComp />
			</Drawer>
		</section >
	)
})

export default AdminPage