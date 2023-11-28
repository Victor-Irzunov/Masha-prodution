import {Empty } from 'antd'
import Link from 'next/link'
import { EyeOutlined, EditOutlined, LikeOutlined, DislikeOutlined } from '@ant-design/icons'
import moment from 'moment'
import Image from 'next/image'
import { transliterate } from '../../transliterate/transliterate'
import '../../node_modules/moment/locale/ru'
export const dynamic = 'force-static';
export const revalidate = 60;
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getData() {
	try {
		const data = await prisma.articles.findMany();
		if (!data || data.length === 0) {
			throw new Error(`Проблема с получением статей`);
		}
		return data
	} catch (error) {
		console.error("Ошибки при запросе статей:", error);
		throw error;
	}
}
moment.locale('ru');

export default async function BlogPage () {
	const data = await getData()

	return (
		<section className='pt-10 pb-30'>
			<div
				className='sd:px-10 xy:px-5'
			>
				<h1
					className='sd:text-8xl xy:text-4xl text-[#191c1d] font-extrabold uppercase'
				>
					Статьи
				</h1>
				<h2
					className='text-white sd:text-6xl xy:text-2xl font-bold sd:mt-20 xy:mt-4'
				>
					психолог Минск
				</h2>
			</div>
			<div className='h-20'></div>
			{
				data.length ? data.map(el => {
					let img
					if (el.img) img = JSON.parse(el.img)[0]?.image
					return (
						<div
							className='sd:px-10 xy:px-5'
							key={el.id}
						>
							<div
								className='flex items-start mb-10'>
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
									
									<h3 className='text-lg'>
										<Link href={{ pathname: `/blog/${transliterate(el.link.split(' ').join('-'))}/${el.id}` }}
											className='border-b border-black'
											// onClick={() => countPlusOne(el.id)}
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

