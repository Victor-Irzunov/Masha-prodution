"use client"
import { useState } from 'react';
import { motion } from "framer-motion";
import { Button, Typography, Popover } from 'antd';
import Link from 'next/link';
import { InfoCircleTwoTone } from '@ant-design/icons';
import { useScreens } from '../../constans/constScreens';
import YouTube from 'react-youtube';
const { Paragraph } = Typography

const TntVideoBlock = () => {
	const [ellipsis, setEllipsis] = useState(true)
	const [isActive, setIsActive] = useState(false)
	const screens = useScreens()

	const blockAnimation = {
		hidden: {
			y: 100,
			opacity: 0,
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.9
			},
		}
	}

	const content = (
		<div>
			< InfoCircleTwoTone
				className='text-lg' />
			<span className='font-semibold ml-2 text-lg'>
				Уточнение
			</span>
			<p className='mt-3 pl-2'>
				Вы будете перенаправлены на страницу записи для уточнения даты и время.
			</p>
		</div>
	)
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			className='bg-white sd:px-10 xy:px-5 py-20'
			id="tnt"
		>
			<motion.div
				variants={blockAnimation}
			>
				<div className=''>
					<h3 className='sd:text-8xl xy:text-4xl font-extrabold mb-6'>Гость на <span className='text-[#cdcecf]'>ТНТ</span></h3>
				</div>

				{/* <div className='relative'>
					<iframe
						className='w-full sd:h-[550px] xy:h-[200px]'
						src={!isActive ? "https://www.youtube.com/embed/TuvaAqoY6m8" : "https://www.youtube.com/embed/TuvaAqoY6m8?&autoplay=1"}
						title='Мария Ирзунова'
						alt="Мария Ирзунова психолог на ТНТ"
						frameBorder="0"
						allow="accelerometer;
						 autoplay;
						  clipboard-write;
						   encrypted-media; 
							gyroscope;
							 picture-in-picture"
							 allowFullScreen
					></iframe>
					<div className={`w-full h-full 
					absolute top-0 left-0 bg-gradient-to-b
					 from-zinc-400/70 to-gray-200/70
					 flex justify-center items-center ${isActive && 'hidden'}`}
					>
						<Button shape="round"
							size={screens.lg ? 'large' : 'small'}
							className='uppercase text-white tracking-widest'
							onClick={() => setIsActive(true)}
							style={{ padding: '1.5em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
						>
							смотреть
						</Button>
					</div>
				</div> */}

				<div className='relative'>
					{isActive ? (
						<YouTube videoId='TuvaAqoY6m8' opts={{ width: '100%', height: screens.lg ? 550 : 200 }} />
					) : (
						<div
							className={`w-full h-[30vh] bg-gradient-to-b from-zinc-400/70 to-gray-200/70 flex justify-center items-center ${isActive && 'hidden'
								}`}
						>
							<Button
								shape='round'
								size={screens.lg ? 'large' : 'small'}
								className='uppercase text-white tracking-widest'
								onClick={() => setIsActive(true)}
								style={{ padding: '1.5em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
							>
								смотреть
							</Button>
						</div>
					)}
				</div>


				<Paragraph
					ellipsis={
						ellipsis
							? {
								rows: 2,
								expandable: true,
								symbol: 'читать больше',
							}
							: false
					}
					className='mt-12 tracking-wider leading-6 sd:text-base xy:text-sm'>В этом интервью поднималась тема бесплодие .. Я лечу весь спектр психологических и эмоциональных трудностей, включая депрессию, панику, обсессивно-компульсивное расстройство, проблемы в отношениях, связанные с тревогой физические и эмоциональные расстройства, проблемы со сном или стрессом, навязчивые мысли, семейные и супружеские конфликты, проблемы социальной тревожности и пост- травматические расстройства . Я могу использовать терапию биологической обратной связи для пациентов с хроническими болевыми расстройствами или тех, кто нуждается в методах снижения стресса. психическое заболевание может затронуть любого человека в любой момент его жизни. На самом деле каждый четвертый человек в какой-то момент сталкивается с проблемами психического здоровья.
					Хотя может быть полезно сначала рассказать о своих проблемах близким друзьям и членам семьи, иногда вам может понадобиться дополнительная помощь и поддержка.
					Психологи могут помочь вам добраться до корня ваших проблем, преодолеть эмоциональные трудности и внести позитивные изменения в вашу жизнь.
				</Paragraph>

				<p className='mt-14 sd:text-base xy:text-sm'>
					Если Вы устали держать всё в себе и Вам хочеться с кем-то поделиться и найти правильное решение?
				</p>
				<div className='flex xy:flex-col sd:flex-row sd:items-center xy:items-start'>
					<p className='mr-7 pt-4 sd:text-base xy:text-sm mb-3'>Запишитесь ко мне на онлайн или оффлайн консультацию</p>
					<Popover content={content}>
						<Button shape="round" size={screens.lg ? 'large' : 'middle'}>
							<Link href='/zapis-k-psikhologu' className='text-white'>
								записаться прямо сейчас
							</Link>
						</Button>
					</Popover>
				</div>
			</motion.div>
		</motion.section>
	)
}

export default TntVideoBlock;
