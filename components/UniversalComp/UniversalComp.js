// "use client"
// import { motion } from "framer-motion"
// import { yCustomAnimation, yAnimation } from '../../constans/animation/AnimationConst'
import Image from "next/image"
import Link from "next/link"

export const UniversalComp = ({ data }) => {
	return (
		<div className=''>
			{
				data.articles.map(el => {
					return (
						<div key={el.id}
						// initial="hidden"
						// whileInView="visible"
						>
							<div
								className='bg-white sd:px-10 xy:px-5 py-10 overflow-hidden'
								id={el.id}
							// variants={yCustomAnimation}
							// custom={el.id}
							>
								<h3 className='sd:text-5xl xy:text-3xl text-[#cdcecf] font-bold'>
									{el.title}
								</h3>

								<div className='sd:text-base xy:text-sm'>
									{el.content}
								</div>

								<div key={el.id}
								// initial="hidden"
								// whileInView="visible"
								>
									<div
										className='flex justify-between sd:items-center xy:items-start mt-16 sd:flex-row xy:flex-col'
									// variants={yAnimation}
									>
										<div className='text-[#191c1d] font-light xy:mb-3 sd:mb-0'>
											<p className='mb-0'>
												Стоимость одной консультации: <span className='text-lg'>{el.price} BYN</span>
											</p>
											<p className='text-xs'>
												Продолжительность: {el.time}
											</p>
										</div>
										<Link href='/zapis-k-psikhologu'
											className='text-[#191c1d] text-[12px] uppercase flex'
											style={{ background: 'transparent' }}
										>
											Записаться консультацию
											<Image src='/images/click.svg' alt="" width={20} height={20} className="ml-1" />
										</Link>
									</div>
								</div>
							</div>
							<div className='w-full h-16 bg-[#cdcecf]'></div>
						</div>
					)
				})
			}
		</div>
	)
}
