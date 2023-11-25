"use client"
import Image from 'next/image'
import { motion } from "framer-motion"
import tnt from '../../public/images/obratili/tnt.webp'
import zoon from '../../public/images/obratili/zoon.webp'
import handshaker from '../../public/images/obratili/handshaker.webp'
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
			className='px-10 pt-10'
		>
			<div className='flex justify-between xy:flex-col sd:flex-row'>
				<div className='sd:w-1/5 xy:w-full pt-6 mb-5'>
					<h4 className=''>На мою работу обратили внимание следующие авторитетные издания:</h4>
				</div>
				<div className='flex sd:justify-around xy:justify-between flex-wrap items-center sd:w-4/5 xy:w-full'>
					<motion.div
						variants={imgAnimation}
						custom={1}
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
					>
						<Image
							src={handshaker}
							width={screens.sm ? '100' : '50'}
							alt='психолог в публикациях известных изданиях'
						/>
					</motion.div>
				</div>
			</div>
		</motion.section>
	)
}

export default ObratiliVnimanieBlock;