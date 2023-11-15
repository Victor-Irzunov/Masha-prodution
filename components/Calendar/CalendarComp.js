"use client"
import { useState, useContext, useEffect } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import 'moment/locale/ru'
import 'moment-timezone'
import { FloatButton } from 'antd'
import {
	RightOutlined, LeftOutlined,
	UnorderedListOutlined,
	PlusOutlined, EditOutlined,
} from "@ant-design/icons"
import { MyContext } from '../../contexts/MyContextProvider'
import { DrawerWindow } from '../../components/drawerWindow/DrawerWindow'
moment.tz.setDefault('Europe/Moscow')
const localizer = momentLocalizer(moment)

const CalendarComp = () => {
	const [open, setOpen] = useState(false)
	const { dataApp } = useContext(MyContext)
	const [isActive, setIsActive] = useState({
		add: false,
		edit: false
	})
	const [events, setEvents] = useState([]);

	useEffect(() => {
		setEvents([...dataApp?.dataZapisi] || []);
	}, [dataApp.dataZapisi]);

	const showDrawer = () => {
		setOpen(true)
	}

		return (
			<>
				<FloatButton.Group
					shape="circle"
					style={{
						right: 24,
					}}
				>
					<FloatButton
						icon={<PlusOutlined />}
						type="primary"
						onClick={() => {
							showDrawer()
							setIsActive({ ...isActive, add: true, edit: false })
						}}
					/>
					<FloatButton
						icon={<EditOutlined />}
						type="primary"
						onClick={() => {
							showDrawer()
							setIsActive({ ...isActive, add: false, edit: true })
						}}
					/>
				</FloatButton.Group>

				<section className='pt-10 pb-20'>
					<Calendar
						localizer={localizer}
						events={events}
						defaultView="month"
						// startAccessor="start"
						endAccessor="end"
						style={{ height: "100vh", background: "#fff", padding: "5px", borderRadius: "10px" }}
						messages={{
							next: (<RightOutlined />),
							previous: (<LeftOutlined />),
							today: "сегодня",
							month: "месяц",
							week: "неделя",
							day: "день",
							agenda: (<UnorderedListOutlined />),
							date: "дата",
							time: "время",
							event: "событие",
							noEventsInRange: 'Мария у Вас на эту дату нет событий!',
							allDay: "Весь день",
						}}
						startAccessor={(event) => { return new Date(event.start) }}
					/>
				</section>
				<DrawerWindow open={open} setOpen={setOpen} isActive={isActive} />
			</>
		)

}

export default CalendarComp