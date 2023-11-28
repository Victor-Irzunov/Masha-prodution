"use client"
import { motion } from "framer-motion"
import {
	titleAnimation,
	titleAnimation2,
} from '../../../../constans/animation/AnimationConst'
import { useState, useContext, useEffect } from 'react'
import { message, Empty, Button, Spin, Result } from 'antd'
import parse from 'html-react-parser'
import { userLikeArticle, userViewArticle } from "../../../../http/articleAPI"
import moment from "moment"
import { LikeOutlined, DislikeOutlined, SmileOutlined } from '@ant-design/icons'
import { MyContext } from "../../../../contexts/MyContextProvider"
import useSWR from 'swr';
import '../../../../node_modules/moment/locale/ru'
import Link from "next/link"
import Image from "next/image"
moment.locale('ru');
const fetcher = (url) => fetch(url).then((res) => res.json());


const ArticleUniversalPage = ({ params: { id } }) => {
	const [isActive, setIsActive] = useState(true)
	const { user } = useContext(MyContext)
	const { data, error } = useSWR(`/api/article/${id}`, fetcher);


	useEffect(() => {
		userViewArticle(id)
			.then(data => {
				if (data) {
					message.success('Добро пожаловать! Ваш выбор – увлекательное чтение авторской статьи. Погружайтесь и наслаждайтесь знаниями!"')
				}
			})
	}, [])


	const isClientSide = typeof window !== 'undefined';
	const hasLiked = isClientSide ? localStorage.getItem(`liked_${id}`) === "true" : false;
	const hasDisLiked = isClientSide ? localStorage.getItem(`disliked_${id}`) === "true" : false;

	const likeFu = (id) => {
		if (hasLiked || hasDisLiked) {
			message.error("Вы уже оценили статью");
			return;
		}
		userLikeArticle({ id })
			.then(data => {
				message.success(data.message);
				localStorage.setItem(`liked_${id}`, "true");
			})
		setIsActive(false);
	}

	const dislikeFu = () => {
		if (hasDisLiked || hasLiked) {
			message.error('Вы уже оценили статью')
			return;
		} else {
			message.success('Спасибо Вас за оценку!')
			localStorage.setItem(`disliked_${id}`, "true");
			setIsActive(false)
		}
	}

	if (error) return <div>
		<Result
			status="500"
			title="500"
			subTitle="Ошибка при загрузке данных"
			extra={<Button type="link" href={`${process.env.NEXT_PUBLIC_BASE_URL}/blog`}>Назад</Button>}
		/>
	</div>;
	if (!data) return <div className="h-[50vh] pt-20">
		<Spin tip="" size="large">
			<div className="content" />
		</Spin>

	</div>;

	return (
		<section className='pt-10 pb-20 overflow-hidden'>
			<div className='container mx-auto'>
				<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/blog`}>
					<div className="flex justify-start items-center pr-1 cursor-pointer">
						<Image src='/arrow-left.svg' alt="Кнопка возврата меню" className="invert" width={20} height={20} />
						<span className="text-black ml-2 uppercase text-xs">Назад</span>
					</div>
				</Link>
				<motion.div
					initial="hidden"
					whileInView="visible"
					className='sd:px-10 xy:px-5 mt-10'
				>
					<motion.h1
						className='sd:text-6xl xy:text-4xl text-[#191c1d] font-extrabold uppercase'
						variants={titleAnimation2}
					>
						{data.link}
					</motion.h1>
					<motion.h2
						className='text-white sd:text-4xl xy:text-2xl font-bold sd:mt-10 xy:mt-2'
						variants={titleAnimation}
					>
						{data.description}
					</motion.h2>
				</motion.div>
				<div className='h-20' />
				<article className="sd:px-10 xy:px-5 flex flex-col relative">
					{
						user.userData && user.userData.isAdmin &&
						<div className='absolute -top-4 right-3 text-pink-500'>
							{data.id}
						</div>
					}
					<div>
						{Object.keys(data).length ? parse(data.article) : <Empty />}
					</div>
					<div className="flex justify-between mt-10 sd:flex-row xy:flex-col sd:text-base xy:text-sm">
						<p className="font-light">Дата публикации: {moment(data.dateTime).format('LLL')}</p>
						<p className="italic font-light">Автор: Мария Ирзунова</p>
					</div>
				</article>

				{
					isActive ?
						<div className="sd:px-10 xy:px-5 mt-10">
							<p>
								Статья была интересной?
							</p>
							<Button icon={<LikeOutlined />} className='mr-4'
								onClick={() => likeFu(data.id)}
							/>
							<Button
								icon={<DislikeOutlined />}
								onClick={dislikeFu}
							/>
						</div>
						:
						<div className="sd:px-10 xy:px-5 mt-5 text-sm">
							<p>Мне очень важно Ваше мнение. Спасибо <SmileOutlined /></p>
						</div>
				}
			</div>
		</section>
	)
}

export default ArticleUniversalPage