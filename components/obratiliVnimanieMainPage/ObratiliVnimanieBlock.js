"use client"
import Image from 'next/image'
import { motion } from "framer-motion"
import tnt from '../../public/images/obratili/tnt.webp'
import zoon from '../../public/images/obratili/zoon.webp'
import handshaker from '../../public/images/obratili/handshaker.webp'
import wdayru from '../../public/images/obratili/wdayru.svg'
import eva from '../../public/images/obratili/eva.webp'
import elle from '../../public/images/obratili/elle.webp'
import lenta from '../../public/images/obratili/lenta.webp'
import talon from '../../public/images/obratili/talon.webp'
import theGirl from '../../public/images/obratili/theGirl.svg'
import doctor from '../../public/images/obratili/doctor.svg'
import baby from '../../public/images/obratili/baby.svg'
import city from '../../public/images/obratili/city.webp'
import by from '../../public/images/obratili/103.webp'
import { useScreens } from '../../constans/constScreens'

const ObratiliVnimanieBlock = () => {
	const screens = useScreens()
	const imgAnimation = {
		hidden: {
			x: 100,
			opacity: 0
		},
		visible: custom => ({
			x: 0,
			opacity: 1,
			transition: {
				delay: custom * 0.2,
				duration: 0.8
			}
		})
	}
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			className='px-10 pt-10 bg-white pb-10'
		>
			<div className='flex justify-between xy:flex-col sd:flex-row'>
				<div className='sd:w-1/5 xy:w-full pt-6 mb-5'>
					<h4 className=''>На мою работу обратили внимание следующие авторитетные издания:</h4>
				</div>
				<div className='flex sd:justify-start xy:justify-between flex-wrap items-center sd:w-4/5 xy:w-full'>
					<motion.div
						variants={imgAnimation}
						custom={1}
						className='mx-3 my-2'
					>
						<Image
							src={tnt}
							width={screens.sm ? '180' : '70'}
							alt='психолог в публикациях известных изданиях'
						/>
					</motion.div>
					<motion.div
						variants={imgAnimation}
						custom={2}
						className='mx-3 my-2'
					>
						<Image
							src={zoon}
							width={screens.sm ? '200' : '90'}
							alt='психолог в публикациях известных изданиях'
						/>
					</motion.div>
					<motion.div
						variants={imgAnimation}
						custom={3}
						className='mx-3 my-2'
					>
						<Image
							src={handshaker}
							width={screens.sm ? '100' : '50'}
							alt='психолог в публикациях известных изданиях'
						/>
					</motion.div>
					<motion.div
						variants={imgAnimation}
						custom={4}
						className='mx-3 my-2'
					>
						<Image
							src={wdayru}
							width={screens.sm ? '150' : '100'}
							alt='психолог в публикациях известных изданиях'
						/>
					</motion.div>
					<motion.div
						variants={imgAnimation}
						custom={5}
						className='mx-3 my-2'
					>
						<Image
							src={eva}
							width={screens.sm ? '250' : '130'}
							alt='психолог в публикациях известных изданиях'
						/>
					</motion.div>
					<motion.div
						variants={imgAnimation}
						custom={6}
						className='mx-3 my-2'
					>
						<Image
							src={theGirl}
							width={screens.sm ? '190' : '100'}
							alt='психолог в публикациях известных изданиях'
						/>
					</motion.div>
					<motion.div
						variants={imgAnimation}
						custom={7}
						className='mx-3 my-2'
					>
						<Image
							src={elle}
							width={screens.sm ? '130' : '70'}
							alt='психолог в публикациях известных изданиях'
						/>
					</motion.div>
					<motion.div
						variants={imgAnimation}
						custom={8}
						className='mx-3 my-2'
					>
						<Image
							src={doctor}
							width={screens.sm ? '230' : '100'}
							alt='психолог в публикациях известных изданиях'
						/>
					</motion.div>
					<motion.div
						variants={imgAnimation}
						custom={9}
						className='mx-3 my-2'
					>
						<Image
							src={lenta}
							width={screens.sm ? '230' : '70'}
							alt='психолог в публикациях известных изданиях'
						/>
					</motion.div>
					<motion.div
						variants={imgAnimation}
						custom={10}
						className='mx-3 my-2'
					>
						<Image
							src={talon}
							width={screens.sm ? '230' : '70'}
							alt='психолог в публикациях известных изданиях'
						/>
					</motion.div>
					<motion.div
						variants={imgAnimation}
						custom={11}
						className='mx-3 my-2'
					>
						<Image
							src={city}
							width={screens.sm ? '230' : '70'}
							alt='психолог в публикациях известных изданиях'
						/>
					</motion.div>
					<motion.div
						variants={imgAnimation}
						custom={12}
						className='mx-3 my-2'
					>
						<Image
							src={baby}
							width={screens.sm ? '230' : '70'}
							alt='психолог в публикациях известных изданиях'
						/>
					</motion.div>
					<motion.div
						variants={imgAnimation}
						custom={13}
						className='mx-3 my-2'
					>
						<Image
							src={by}
							width={screens.sm ? '230' : '70'}
							alt='психолог в публикациях известных изданиях'
						/>
					</motion.div>
				</div>
			</div>
		</motion.section>
	)
}

export default ObratiliVnimanieBlock;