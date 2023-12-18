import { data } from '../../constans/smi/SMIConst'
import Image from 'next/image'

export const metadata = {
	title: 'Психолог Мария Ирзунова в СМИ | Минск',
	description: 'Мария Ирзунова — известный эксперт в области психологии, регулярно предоставляющая интервью и комментарии в средствах массовой информации. Она освещает актуальные психологические темы, такие как стресс, тревога и депрессия, а также дает советы по улучшению психологического здоровья и благополучия.',
	alternates: {
	  canonical: 'https://irzunova.by/smi',
	},
	og: {
	  title: 'Психолог Мария Ирзунова в СМИ',
	  description: 'Мария Ирзунова — известный эксперт в области психологии, регулярно предоставляющая интервью и комментарии в средствах массовой информации. Она освещает актуальные психологические темы, такие как стресс, тревога и депрессия, а также дает советы по улучшению психологического здоровья и благополучия.',
	  type: 'website',
	  url: 'https://irzunova.by/smi',
	  image: '/images/main/main.webp',
	},
 };
 
const SMIComp = () => {
	return (
		<section className='pt-10 pb-20'>
			<div
				className='sd:px-10 xy:px-5'
			>
				<h1
					className='sd:text-8xl xy:text-4xl text-[#191c1d] font-extrabold uppercase'
				>
					Мария Ирзунова в СМИ
				</h1>
				<h2
					className='text-white sd:text-4xl xy:text-2xl font-bold mt-10'
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
								<div className='sd:p-3'>
						
									<Image
										width={96}
										height={96}
										src={el.img}
										alt={`Публикация Психолога Ирзуновой на ${el.publik}`}
										className='rounded-full shadow-2xl bg-white'
									/>
								</div>
								<div className='ml-5 w-4/5'>
									<p className='uppercase mb-2'>Публикация на {el.publik}</p>
									<div className='flex font-light'>
										<p className='mb-0 mr-2 sd:text-base xy:text-sm'>Тема: </p>
										<a
											href={el.link}
											target='_blank'
											className='underline mr-2 sd:text-base xy:text-sm'
										>
											{el.titleLink}
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