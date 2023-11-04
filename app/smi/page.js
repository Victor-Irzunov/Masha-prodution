


// import link from '../../images/smi/link.svg'
import { Avatar } from 'antd'
import { data } from '../../constans/smi/SMIConst'
import Image from 'next/image'

export const metadata = {
	title: 'Психолог Мария Ирзунова в СМИ',
	description: 'Психолог Ирзунова Мария - известный эксперт в области психологии. Регулярно дает интервью и комментарии в СМИ. Освещает актуальные психологические темы - стресс, тревога, депрессия. Дает советы по улучшению психологического здоровья и благополучия.',
 }

const SMIComp = () => {
	return (
		<section className='pt-10 pb-20'>
			<div
				// initial="hidden"
				// whileInView="visible"
				className='sd:px-10 xy:px-5'
			>
				<h1
					className='sd:text-8xl xy:text-4xl text-[#191c1d] font-extrabold uppercase'
					// variants={titleAnimation2}
				>
					Мария Ирзунова в СМИ
				</h1>
				<h2
					className='text-white sd:text-4xl xy:text-2xl font-bold mt-10'
					// variants={titleAnimation}
				>
					Минск
				</h2>
			</div>

			<div className='sd:px-10 xy:px-5 mt-32'>
				<p className='text-2xl font-bold'>Публикации</p>
				{
					data.map(el => {
						return (
							<div
								className='flex sd:items-center xy:items-start mt-12'
								key={el.id}
							>
								<div className='sd:p-3 xy:p-1'>
									<Image
										width={74}
										height={74}
										src={el.img}
										alt=''
										className='rounded-full shadow-2xl'
									/>
								</div>
								<div className='ml-5'>
									<p className='uppercase mb-2'>Публикация на {el.publik}</p>
									<div className='flex font-light'>
										<p className='mb-0 mr-2 sd:text-base xy:text-sm'>Тема: </p>
										<a
											href={el.link}
											target='_blank'
											className='underline mr-2 sd:text-base xy:text-sm'
										>
											{el.titleLink}
											{/* {' '} */}
											{/* <Image src={link} width='16px' className='ml-2' /> */}
										</a>

									</div>
									<p className='font-light text-xs mt-4'>
										Автор: Мария Ирзунова
									</p>
								</div>
							</div>
						)
					})
				}
			</div>
		</section>
	)
}
export default SMIComp