"use client"
import { motion } from "framer-motion"
import FormMainPage from '../form/mainPage/FormMainPage'
import {
	titleAnimation, titleAnimation2
} from '../../constans/animation/AnimationConst'

const SectionFormMainPage = () => {
	return (
		<section
			className='sd:px-10 xy:px-5 py-10 bg-[#191c1d]'
			id='form'
		>
			<div className='container'>
				<motion.div
					className='flex justify-between xy:flex-col sd:flex-row'
					initial="hidden"
					whileInView="visible"
				>
					<motion.div
						className='sd:w-[30%] xy:w-full'
						variants={titleAnimation}
					>
						<p className='text-white text-lg font-light tracking-wider'>Напишите мне,<br /> что Вас интересует <br /> или  беспокоит</p>
					</motion.div>
					<motion.div
						className='sd:w-[60%] xy:w-full pt-10'
						variants={titleAnimation2}
					>
						<FormMainPage />
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}
export {SectionFormMainPage}