"use client"
import { motion } from "framer-motion"
import {
	titleAnimation,
	titleAnimation2,
} from '../../../../constans/animation/AnimationConst'
import { useState, useContext, useEffect } from 'react'
import { message, Empty, Button } from 'antd'
import parse from 'html-react-parser'
import { getOneArticle, userLikeArticle } from "../../../../http/articleAPI"
import moment from "moment"
import { LikeOutlined, DislikeOutlined, SmileOutlined } from '@ant-design/icons'
import { MyContext } from "../../../../contexts/MyContextProvider"
// import dataArticles from "@/constans/Articles/dataArticle"
import useSWR from 'swr';
import '../../../../node_modules/moment/locale/ru'
moment.locale('ru');
const fetcher = (url) => fetch(url).then((res) => res.json());


const ArticleUniversalPage = ({ params: { id } }) => {
	// const [data, setData] = useState({})
	const [isActive, setIsActive] = useState(true)
	const { user } = useContext(MyContext)

	// useEffect(() => {
	// 	getOneArticle({ id })
	// 		.then(data => {
	// 			if (data) {
	// 				setData(data)
	// 			}
	// 			else message.error(data.message)
	// 		})
	// }, [id])
	const { data, error } = useSWR(`/api/article/${id}`, fetcher);

	if (error) return <div>Ошибка при загрузке данных.</div>;
	if (!data) return <div>Загрузка данных...</div>;

	const hasLiked = localStorage.getItem(`liked_${id}`) === "true";
	const hasDisLiked = localStorage.getItem(`disliked_${id}`) === "true";

	const likeFu = (id) => {
		if (hasLiked) {
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
		if (hasDisLiked) {
			message.error('Вы уже оценили статью')
			return;
		} else {
			message.success('Спасибо Вас за оценку!')
			localStorage.setItem(`disliked_${id}`, "true");
			setIsActive(false)
		}
	}

	return (
		<section className='pt-10 pb-20 overflow-hidden'>
			<motion.div
				initial="hidden"
				whileInView="visible"
				className='sd:px-10 xy:px-5'
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
		</section>
	)
}

export default ArticleUniversalPage