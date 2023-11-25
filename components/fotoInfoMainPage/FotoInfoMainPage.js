"use client"
import foto from '../../public/images/fotoInfo/foto.webp'
import svg from '../../public/images/fotoInfo/svgImg.svg'
import Image  from 'next/image'
import { motion } from "framer-motion"
import { InstagramOutlined } from '@ant-design/icons'
import { useScreens } from '../../constans/constScreens'

const FotoInfoMainPage = () => {
	const screens = useScreens()

	const infoAnimation = {
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
		<motion.section
			initial="hidden"
			whileInView="visible"
			className='px-10 py-32'
			id='masha'
		>
			<motion.div
				variants={infoAnimation}
				className='flex xy:flex-col sd:flex-row'
			>
				<div className='xyy:mb-10 sd:mb-0 sd:pr-5 xyy:pr-0'>
					<Image src={foto}
						width={screens.lg ? '85%' : '100%'}
						alt='фото психолог в Минске'
					/>
				</div>
				<div>
					<Image src={svg} alt='иконка кавычки' />
					<p className='mt-4 sd:text-lg xy:text-sm'>
						У меня есть удобный частный офис возле Национальной библиотеки. Когда вы позвоните, я отвечу на ваш звонок лично, гарантируя вашу конфиденциальность. Вам никогда не придется разговаривать с секретарем, автоответчиком или администратором. И, в отличие от некоторых практик, вас никогда не переведут на должность младшего сотрудника или стажера. При необходимости также могут быть организованы частные консультации по SKYPE.
						Также я работаю в «EVA clinik» и могу Вас принять там.
					</p>
					<p className='text-xl leading-3 mt-12 font-semibold mb-4'>Мария Ирзунова</p>
					<p className='text-white mb-4'>Практический и Перинатальный Психолог, Член Российской Ассоциации Репродукции Человека и Международной Ассоциации Психологов. Работает в Гештальт, КПТ и АРТ направлениях.</p>
					<a href='https://www.instagram.com/psy_irzunova/' target='_blank'>
						<InstagramOutlined className='text-2xl' />
					</a>
				</div>
			</motion.div>
		</motion.section>
	)
}
export default FotoInfoMainPage;