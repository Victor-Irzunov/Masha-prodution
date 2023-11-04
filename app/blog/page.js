"use client"
import { useEffect, useState, useContext } from 'react'
import { motion } from "framer-motion"
import {
	titleAnimation,
	titleAnimation2,
	yCustomAnimation,
} from '../../constans/animation/AnimationConst'
import { message, Empty } from 'antd'
import Link from 'next/link'
import { EyeOutlined, EditOutlined, LikeOutlined, DislikeOutlined } from '@ant-design/icons'
import { getAllArticle, userViewArticle } from '../../http/articleAPI'
import moment from 'moment'
import { MyContext } from '../../contexts/MyContextProvider'
import Image from 'next/image'
import { transliterate } from '../../transliterate/transliterate'
import '../../node_modules/moment/locale/ru'
moment.locale('ru');

const BlogPage = () => {
	const [data, setData] = useState([])
	const { user } = useContext(MyContext)

	useEffect(() => {
		getAllArticle()
			.then(data => {
				if (data) {
					setData(data)
				}
				else message.error(data.message)
			})
	}, [])

	const countPlusOne = (id) => {
		console.log("🚀 🚀 🚀  _ file: page.js:34 _ countPlusOne _ id:", id)
		userViewArticle(id)
			.then(data => {
				console.log("🚀 🚀 🚀  _ file: page.js:37 _ countPlusOne _ data:", data)
			})
	}


	return (
		<section className='pt-10 pb-30'>
			<motion.div
				initial="hidden"
				whileInView="visible"
				className='sd:px-10 xy:px-5'
			>
				<motion.h1
					className='sd:text-8xl xy:text-4xl text-[#191c1d] font-extrabold uppercase'
					variants={titleAnimation2}
				>
					Статьи
				</motion.h1>
				<motion.h2
					className='text-white sd:text-6xl xy:text-2xl font-bold sd:mt-20 xy:mt-4'
					variants={titleAnimation}
				>
					психолог Минск
				</motion.h2>
			</motion.div>


			<div className='h-20'></div>

			{
				data.length ? data.map(el => {
					let img
					if (el.img) img = JSON.parse(el.img)[0].image
					return (
						<div
							className='sd:px-10 xy:px-5'
							// initial="hidden"
							// whileInView="visible"
							key={el.id}
						>
							<div
								className='flex items-start mb-10'
							// variants={yCustomAnimation}
							// custom={el.id + 2}
							>
								<div className='sd:w-1/5 xy:w-1/3 mr-7'>
									<Image
										src={`/uploads/${img}`}
										className='rounded-md shadow-2xl'
										alt=''
										width={200}
										height={200}
									/>
								</div>
								<div className='xy:w-8/12 sd:w-full relative'>
									{
										user.userData && user.userData.isAdmin ?
											<div className='absolute top-0 right-0 text-pink-500'>
												{el.id}
											</div>
											:
											null
									}

									<h3 className='text-lg'>
										<Link href={{ pathname: `/blog/${transliterate(el.link.split(' ').join('-'))}/${el.id}` }}
											className='border-b border-black'
											onClick={() => countPlusOne(el.id)}
										>
											{el.link}
										</Link>
									</h3>
									{
										el.description &&
										<p className='text-sm font-light'>
											{el.description}
										</p>
									}

									<div className='flex 
														justify-start 
														sd:items-center
														xy:items-start
														text-[12px]
														text-gray-700
														leading-4
														xy:flex-col sd:flex-row 
							 		'>
										<div className='mr-3 xy:mb-2 sd:mb-0'>
											<EditOutlined />
											<span className='ml-1'>
												{moment(el.dateTime).format('LLL')}
											</span>
										</div>


										<div className='flex 
														justify-start 
														items-center'
										>
											<div>
												<EyeOutlined />
												<span className='ml-1'>
													{el.view}
												</span>
											</div>
											<div className='ml-3'>
												<LikeOutlined />
												<span className='ml-1'>
													{el.like}
												</span>
											</div>
											<div className='ml-4'>
												<DislikeOutlined />
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					)
				})
					:
					<Empty />
			}

		</section>
	)
}

export default BlogPage