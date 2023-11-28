import { HeartOutlined, UserOutlined } from '@ant-design/icons'
import { Rate, Avatar, Empty } from 'antd'
import moment from 'moment'
import AddOtzyvyBtn from '../../components/addOtzyvy/AddOtzyvyBtn'
import { PrismaClient } from '@prisma/client';
export const dynamic = 'force-static';
export const revalidate = 60;

const prisma = new PrismaClient();

async function getData() {
	console.log('---------запрос----' )
	try {
		// const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/otzyvy/all`)

		// if (!res.ok) {
		// 	throw new Error(`HTTP error! Ошбка !-1`);
		// }
		const data = await prisma.otzyvy.findMany();
		if (!data || data.length === 0) {
			throw new Error(`Проблема с получением отзывов`);
		}
		return data
	} catch (error) {
		console.error("Ошибки при запросе:", error);
		throw error;
	}
}

export default async function OtzyvyPage() {
	const data = await getData()

	const fu = (n, arr) => n + " " + arr[(n % 100 > 4 && n % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(n % 10 < 5) ? n % 10 : 5]]
	const arr1 = ['год', 'года', 'лет']

	return (
		<section className='pt-10 pb-20'>
			<div
				className='sd:px-10 xy:px-5 sd:mb-40 xy:mb-10'
			>
				<h1
					className='sd:text-8xl xy:text-4xl text-[#191c1d] font-extrabold uppercase'
				>
					Отзывы психолога в Минске
				</h1>
				<h2
					className='text-white sd:text-4xl xy:text-2xl font-bold mt-10'
				>
					Ирзуновой Марии
				</h2>
			</div>
			{data.length ? data.map(el => {
				if (el.isPublication) {
					return (
						<div
							className='sd:px-10 xy:px-5 pt-10 bg-white overflow-hidden'
							key={el.id}
						>
							<div
								className='border-b pb-10 overflow-hidden'
							>
								<div className='flex'>
									<div className=''>
										<Avatar
											style={{
												backgroundColor: '#87d068',
											}}
											icon={<UserOutlined />}
										/>
									</div>
									<div className='ml-3 w-1/2'>
										<div className='flex justify-start items-center'>
											<p className='mb-0 text-lg mr-3'>{el.name}</p>
											<p className='mb-0 text-xs mr-2 text-gray-500 pt-1'>
												г. {el.city}
											</p>
											<p className='mb-0 text-xs text-gray-500 pt-1'>
												{fu(el.vozvrast, arr1)}
											</p>
										</div>
										<p className='text-[10px] text-gray-400'>{moment(el.createdAt).startOf('hour').fromNow()}</p>
										<Rate
											allowHalf
											character={<HeartOutlined />}
											defaultValue={+el.rate}
											style={{ color: '#f80759' }}
										/>

									</div>
									<div className='w-1/4'>
									</div>
								</div>
								<div className='pl-6 mt-2'>
									<p className='text-left text-sm mt-4'>
										{el.otzyv}
									</p>
								</div>
								<div className='pl-10 mt-6'>
									<div className='flex'>
										<Avatar src='/images/logo2.webp' size='small' />
										<div className='ml-2'>
											<p className='text-sm mb-0'>Мария</p>
											<p className='text-[10px] text-gray-400'>психолог</p>
										</div>
									</div>
									<div className='pl-8'>
										<p className='text-xs text-gray-500 inline'>{el.response}</p>
									</div>
								</div>
							</div>
						</div>
					)
				}
			})
				:
				<Empty />
			}

			<AddOtzyvyBtn />

		</section >
	)
}


