"use client"
import { Collapse, Button } from 'antd'
import { textCollapse } from '../../constans/Constans'
import { motion } from "framer-motion"
import PopoverInfo from '../popoverInfo/PopoverInfo'
import { useScreens } from '../../constans/constScreens'
// import { Link as LinkScroll } from 'react-scroll'
import ModalComp from '../modal/ModalComp'
import { useState } from 'react'
// const { Panel } = Collapse;

const QuestionsMainPage = () => {
	const screens = useScreens()
	const [isModalOpen, setIsModalOpen] = useState(false)
	const showModal = () => {
		setIsModalOpen(true)
	}
	const blockAnimation = {
		hidden: {
			y: 100,
			opacity: 0,
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				delay: 0.7,
				duration: 1
			},
		}
	}
	return (
		<div className='bg-white'>
			<motion.section
				className='py-10 overflow-hidden w-full px-4'
				initial="hidden"
				whileInView="visible"
				id='voprosy'
			>
				<motion.div
					className=''
					variants={blockAnimation}
				>
					<h3 className='sd:text-6xl xy:text-2xl font-extrabold mb-5'>
						Часто задаваемые вопросы
					</h3>
					<Collapse
						ghost
						items={textCollapse}
					/>
					

					<div className='flex justify-start items-center pl-10 mt-10'>
						<Button
							type='primary'
							shape="round"
							size={screens.lg ? 'large' : 'middle'}
							className='mr-6'
							onClick={showModal}
						>
								задать вопрос
						</Button>
						<PopoverInfo />
					</div>
				</motion.div>
			</motion.section>
			<ModalComp
				formQuestins={true}
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
				title='Задать вопрос'
			/>
		</div>
	)
}
export default QuestionsMainPage;