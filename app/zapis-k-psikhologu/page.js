"use client"
import { useState, useRef, useContext, useEffect } from 'react'
import { motion } from "framer-motion"
import {
	titleAnimation,
	titleAnimation2,
	yCustomAnimation
} from '../../constans/animation/AnimationConst'
import { ScheduleMeeting, timeSlotDifference } from 'react-schedule-meeting'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { ru } from 'date-fns/locale'
import FormZapisUser from '../../components/form/formZapis/FormZapisUser'
import { message, Tour, Button, Divider, Empty } from 'antd'
import { observer } from "mobx-react-lite"
import { useScreens } from '../../constans/constScreens'
import { MyContext } from '../../contexts/MyContextProvider'


const ZapisNaPriyomPage = observer(() => {
	const [value, setValue] = useState('')
	const ref1 = useRef(null);
	const ref2 = useRef(null);
	const ref3 = useRef(null)
	const screens = useScreens()
	const [open, setOpen] = useState(false)
	const { dataApp } = useContext(MyContext)
	const steps = [
		{
			title: 'Для того, что-бы записаться на приём к психологу, необходимо',
			description: 'выбрать удобную для Вас дату и время консультации',
			target: () => ref1.current,
		},
		{
			title: 'Следующим шагом Вам необходимо заполнить форму, ввести имя, Ваш телефон и выбрать тип консультации.',
			description: 'Вот поля для заполнения',
			target: () => ref2.current,
		},
		{
			title: 'Последний шаг после заполнения полей',
			description: 'Нажмите кнопку ЗАПИСАТЬСЯ',
			target: () => ref3.current,
		},
	]
	const availableTimeslots = [0, 1, 2, 3, 4, 5, 6, 7].map((id) => {
		return {
			id,
			startTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(14, 0, 0, 0)),
			endTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(22, 0, 0, 0)),
		}
	})
	useEffect(() => { }, [dataApp.dataZapisi])

	const clickScroll = (params) => {
		setTimeout(() => window.scrollBy({
			top: params,
			left: 0,
			behavior: 'smooth',
		}), 150)
	}
	const f1 = (e) => {
		setValue(e.startTime)
		clickScroll(350)
		// e.resetSelectedTimeState()
		// e.resetDate()
		message.info('Заполните пожалуйста ниже форму')
	}
	const unavailableTimeSlots = []
	if (dataApp.dataZapisi.length) {
		dataApp.dataZapisi.forEach(el => {
			unavailableTimeSlots.push({ startTime: el.start, endTime: el.end })
		})
	}
	const availableTimeSlotsLessUnavailableTimeSlots = timeSlotDifference(availableTimeslots, unavailableTimeSlots)

	return (
		<section className='pt-10'>
			<motion.div
				initial="hidden"
				whileInView="visible"
				className='sd:px-10 xy:px-5'
			>
				<motion.h1
					className='sd:text-6xl xy:text-4xl text-[#191c1d] font-extrabold uppercase'
					variants={titleAnimation2}
				>
					Запись на приём к психологу в Минске
				</motion.h1>
				<motion.h2
					className='text-white sd:text-4xl xy:text-xl font-bold sd:mt-10 xy:mt-12'
					variants={titleAnimation}
				>
					Выберите удобную для вас дату и время для записи
				</motion.h2>
				<motion.p className='sd:mt-20 xy:mt-6 font-light tracking-wide xy:text-sm sd:text-base'>
					Консультация может проходить как онлайн (через телефон или компьютер), так и оффлайн с посещением кабинета, который находится недалеко от Национальной библиотеки (ст. метро "Восток"), цена при этом не меняется.
				</motion.p>
			</motion.div>
			<div className='flex flex-col sd:px-10 xy:px-5 mt-12'>
				{
					screens.lg &&
					<div className='mb-6 text-right'>
						<Button type="primary"
							className=''
							onClick={() => {
								setOpen(true)
							}}
							icon={<QuestionCircleOutlined />}
						>
							нужна помощь
						</Button>
					</div>
				}
				<div
					className=''
					ref={ref1}
				>
					<ScheduleMeeting
						borderRadius={10}
						primaryColor="rgb(101,163,13)"
						eventDurationInMinutes={120}
						backgroundColor='#ddd'
						// eventStartTimeSpreadInMinutes={60}
						availableTimeslots={availableTimeSlotsLessUnavailableTimeSlots}
						lang_goToNextAvailableDayText="перейти на следующий день"
						onStartTimeSelect={f1}
						format_startTimeFormatString={'HH:mm'}
						locale={ru}
						lang_emptyListText={
							<Empty description={
								<span>
									На выбранную дату, все записи заняты.
								</span>} />
						}
						format_nextFutureStartTimeAvailableFormatString="d LLL, cccc"
						format_selectedDateDayTitleFormatString="d LLL, cccc"
					// startTimeListStyle='scroll-list'
					/>
				</div>

				<div className='mt-10' ref={ref2}>
					{
						(value || open) &&
						<div className='font-light'>
							{
								!open &&
								<p>
									{`Ваш выбор: ${value.toLocaleDateString("ru-RU")} в ${value.toLocaleTimeString("ru-RU")}`}
								</p>
							}
							<Divider />

							<FormZapisUser value={value} ref={ref3} setOpen={setOpen} setValue={setValue} />

							<Divider />

							<p className='text-sm text-gray-500'>
								Если будут какие-либо изменения в расписании, я Вам перезвоню для согласования новой удобной для Вас даты и время.
							</p>
						</div>
					}
				</div>
			</div>
			<article className='sd:px-10 xy:px-5 py-10 bg-[#191c1d] mt-28'>
				<div className=''>
					<motion.div
						className=''
						initial="hidden"
						whileInView="visible"
					>
						<motion.div
							className=''
							variants={yCustomAnimation}
							custom={1}
						>
							<h3 className='text-white text-2xl font-light tracking-wider'>
								Как записаться на приём к психологу в Минске
							</h3>
							<p className='text-white sd:text-lg xy:text-sm font-light tracking-wider'>
								Процесс простой: выше вы найдете удобную форму для записи. Просто выберите дату и время, на которое вам удобно, заполните поля с вашим именем и контактным телефоном, а затем нажмите на кнопку "Записаться". Мгновенно – и вы официально записаны на консультацию!

								Поздравляем вас с этим важным шагом к улучшению вашей жизни и настроения. Забота о своем психическом благополучии – знак силы и мудрости. Не упустите возможность получить ценные инсайты и поддержку от опытного психолога. Вас ждет интересный и продуктивный опыт личностного роста.

								Не откладывайте на потом – запишитесь прямо сейчас! Вас ждут положительные изменения и новое качество жизни. Нажмите на кнопку "Записаться" и начните этот важный путь уже сегодня.
							</p>
						</motion.div>
						<motion.div
							className='pt-10'
							variants={yCustomAnimation}
							custom={3}
						>
							<h3 className='text-white text-2xl font-light tracking-wider'>
								Как решится на консультацию с психологом
							</h3>
							<p className='text-white sd:text-lg xy:text-sm font-light tracking-wider'>
								Жизнь бросает нам вызовы, иногда мы чувствуем себя потерянными или перегруженными эмоциями. И в такие моменты важно иметь рядом профессионала, готового поддержать вас на этом пути. Консультация с психологом – это шанс разглядеть проблемы с новой стороны, найти ресурсы внутри себя и научиться эффективно справляться с трудностями.
							</p>
							<p className='text-white sd:text-lg xy:text-sm font-light tracking-wider'>
								Чтобы начать этот важный шаг, достаточно просто. Взгляньте на форму записи выше: она создана для вашего удобства. Выберите удобную дату и время, которые подходят вам, заполните необходимые поля, и не забудьте указать ваш контактный номер телефона. После этого, кликните на кнопку "Записаться". Все готово, и вы на первом шаге к новому пониманию себя и своих эмоций.
							</p>
							<p className='text-white sd:text-lg xy:text-sm font-light tracking-wider'>
								Не оставляйте себя в одиночестве с вашими мыслями и чувствами. Дайте себе шанс на позитивные изменения, на новый взгляд на мир вокруг. Запишитесь на консультацию сейчас, и откройте дверь к более яркой и уравновешенной жизни. Нажмите на кнопку "Записаться" и начните этот уникальный путь к своему лучшему "Я" прямо сейчас!
							</p>

						</motion.div>
						<motion.div
							className='pt-10'
							variants={yCustomAnimation}
							custom={5}
						>
							<h3 className='text-white text-2xl font-light tracking-wider'>
								Конфиденциальность клиента в психологической работе.
							</h3>
							<p className='text-white sd:text-lg xy:text-sm font-light tracking-wider'>
								Взаимопонимание и доверие – важные аспекты взаимодействия с психологом. Один из основных принципов, на котором строится эта связь, это полная конфиденциальность. Когда вы обращаетесь за помощью к психологу, вы можете быть уверены, что ваши мысли, эмоции и личная информация останутся абсолютно защищенными.
							</p>
							<p className='text-white sd:text-lg xy:text-sm font-light tracking-wider'>
								Ваш психолог обязан соблюдать строгие стандарты этики и профессионального поведения. Вся информация, которую вы делитесь, остается анонимной и не раскрывается без вашего явного согласия. Это создает безопасное и доверительное пространство, в котором вы можете свободно выражать свои мысли и чувства.
							</p>
							<p className='text-white sd:text-lg xy:text-sm font-light tracking-wider'>
								Важно понимать, что психологическое консультирование не только помогает вам лучше разобраться в ваших проблемах, но и дает возможность вам сделать это в абсолютно неразглашаемой атмосфере. Без вашего разрешения, ни одна информация о вас не будет передана третьим лицам, будь то друзья, семья или даже другие специалисты.
							</p>
							<p className='text-white sd:text-lg xy:text-sm font-light tracking-wider'>
								В своей работе психологи стремятся к тому, чтобы вы чувствовали себя комфортно и защищенно. Это основа для открытой и эффективной коммуникации, которая помогает вам преодолевать трудности и двигаться вперед. Конфиденциальность – это залог успешной работы с психологом, где ваша личность и ваши личные истории обрабатываются с максимальным уважением и доверием.
							</p>

						</motion.div>
						<motion.div
							className='pt-10'
							variants={yCustomAnimation}
							custom={7}
						>
							<h3 className='text-white text-2xl font-light tracking-wider'>
								Как записать на консультацию к психологу подростка
							</h3>
							<p className='text-white sd:text-lg xy:text-sm font-light tracking-wider'>
								Пожалуйста, обратите внимание, что психолог принимает подростков с 12 лет и старше, и только при наличии их согласия на консультацию.

								Для записи, пожалуйста, воспользуйтесь специальной формой выше. Выберите удобную дату и время, соответствующие вашему подростку. Заполните все обязательные поля, включая имя подростка и контактный номер телефона. После завершения, нажмите на кнопку "Записаться". Таким образом, ваш подросток будет официально записан на консультацию.

								Этот важный шаг поможет поддержать психологическое благополучие вашего подростка. Взаимодействие с опытным психологом поможет развивать эмоциональный интеллект, умение управлять стрессом и разрешать конфликты. Также это предоставит вашему ребенку возможность выразить свои мысли и чувства в доверительной обстановке.

								Не упустите этот шанс для поддержки личностного роста и развития вашего подростка. Запишитесь уже сегодня! Просто нажмите на кнопку "Записаться" и начните этот важный путь к поддержке и психологическому благополучию вашего ребёнка.
							</p>
						</motion.div>
						<motion.div
							className='pt-10'
							variants={yCustomAnimation}
							custom={9}
						>
							<h3 className='text-white text-2xl font-light tracking-wider'>
								Запись на прием у психологу, когда один из супругов против
							</h3>
							<p className='text-white sd:text-lg xy:text-sm font-light tracking-wider'>
								В жизни бывают моменты, когда мы сталкиваемся с трудными решениями, и одним из них может быть решение о посещении психолога. Важно помнить, что поддержка психолога может сыграть значительную роль в преодолении сложностей и укреплении отношений. Однако, бывает так, что один из супругов не уверен в необходимости этого шага.
							</p>
							<p className='text-white sd:text-lg xy:text-sm font-light tracking-wider'>
								Важно начать с открытого и честного разговора. Попробуйте найти время, когда вы оба сможете поговорить спокойно и без лишнего напряжения. Выразите свои мысли и опасения относительно ситуации. Подчеркните, что забота о психологическом благополучии обоих важна для создания здоровой и гармоничной семьи.
							</p>
							<p className='text-white sd:text-lg xy:text-sm font-light tracking-wider'>
								Предложите супругу попробовать одну консультацию. Напомните, что это не обязательно долгосрочное обязательство, а всего лишь первый шаг к пониманию и решению проблемы. Дайте понять, что ваше желание улучшить отношения и общее благополучие.
							</p>
							<p className='text-white sd:text-lg xy:text-sm font-light tracking-wider'>
								Помните, что решение о записи на прием к психологу – это совместное решение, основанное на уважении и заботе друг о друге. Вместе вы можете обрести новые способы решения проблем, укрепить связь и открыть двери к более гармоничному будущему.
							</p>
						</motion.div>
					</motion.div>
				</div>
			</article>
			<Tour
				open={open}
				onClose={() => setOpen(false)}
				steps={steps}
			/>
		</section>
	)
})

export default ZapisNaPriyomPage