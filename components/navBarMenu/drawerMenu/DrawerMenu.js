// "use client"
import { useState, useContext, useEffect } from 'react'
import {  Drawer } from 'antd'
import { motion } from "framer-motion"
import { navBar } from '../../../constans/Constans'
import Link from 'next/link'
// import { Avatar } from 'antd'
import { yCustomAnimation2 } from '../../../constans/animation/AnimationConst'
// import CyrillicToTranslit from 'cyrillic-to-translit-js'
import { observer } from 'mobx-react-lite'
import { ImportOutlined, ExportOutlined } from '@ant-design/icons'
import avatar from '../../../public/images/logo2.webp'
import ModalComponent from '../../modalLoginRegistrat/ModalComponent'
import { MyContext } from '../../../contexts/MyContextProvider'
import Image from 'next/image'
import { transliterate } from '../../../transliterate/transliterate'


const DrawerMenu = observer(({ setOpenMenu, openMenu, exit ,showModal,imgAnimation, open, setOpen}) => {
	const { user } = useContext(MyContext)
	const [childrenDrawer, setChildrenDrawer] = useState(false)
	// const cyrillicToTranslit = new CyrillicToTranslit()
	const [isUpdate, setIsUpdate] = useState(false)

	useEffect(() => {
		setIsUpdate(i => !i)
	}, [user.isAuth, user.userData, user])

	const onClose = () => {
		setOpenMenu(false)
	};

	const showChildrenDrawer = () => {
		setChildrenDrawer(true)
	}

	const onChildrenDrawerClose = () => {
		setChildrenDrawer(false);
	}

	return (
		<>
			<Drawer title={<p className='uppercase mb-0 text-lg tracking-wider'>Меню</p>} onClose={onClose} open={openMenu}>
				<nav className='h-full px-2'>
					<motion.div
						initial="hidden"
						whileInView="visible"
						className='flex flex-col justify-between h-full'
					>
						<div className=''>
							<ul
								className='tracking-wider text-[#191c1d] uppercase text-sm'
							>
								{
									navBar.map(el => {
										if (el.key === 1) {
											if (user?.userData?.isAdmin) {
												return (
													<motion.li
														variants={yCustomAnimation2}
														key={el.key}
														custom={el.key}
														className='mb-4'
														onClick={onClose}
													>
														<Link href={`${transliterate(el.link)}`}
															className='
										relative
										before:border-b
										before:border-black
										before:transition-all
										 before:duration-300 
										 before:ease-in-out
										before:absolute 
										before:-bottom-1 
										before:h-0
										hover:before:h-full
										before:w-0
										hover:before:w-full
										'
														>
															{el.label}
														</Link>
													</motion.li>
												)
											}
										} else {
											return (
												<motion.li
													variants={yCustomAnimation2}
													key={el.key}
													custom={el.key}
													className='mb-4'
													onClick={onClose}
												>
													<Link href={`${transliterate(el.link)}`}
														className='
										relative
										before:border-b
										before:border-black
										before:transition-all
										 before:duration-300 
										 before:ease-in-out
										before:absolute 
										before:-bottom-1 
										before:h-0
										hover:before:h-full
										before:w-0
										hover:before:w-full
										'
													>
														{el.label}
														<span className='lowercase text-xs block'>{el.span && el.span}</span>
													</Link>
												</motion.li>
											)
										}
									})
								}
								{
									user.isAuth ?
										<motion.li
											variants={yCustomAnimation2}
											custom={18}
											onClick={onClose}
										>
											<ExportOutlined onClick={exit} />
										</motion.li>
										:
										<motion.li
											variants={yCustomAnimation2}
											custom={18}
											onClick={showModal}
										>
											<ImportOutlined onClick={onClose} />
										</motion.li>
								}
							</ul>
						</div>
						<motion.div
							variants={imgAnimation}
							custom={16}
							className='text-center w-full'
						>
							<Link
								href='/'
							>
								<Image
									src={avatar}
									className='border-lime-600 shadow-2xl rounded-full w-20 mx-auto'
									alt='Аватар психолога Ирзуновой Марии'
								/>
								<p className='uppercase font-extrabold text-xl text-[#191c1d] mb-2'>мария ирзунова</p>
								<p className='uppercase font-light text-xs text-[#191c1d] mb-2'>психолог</p>
							</Link>
						</motion.div>
					</motion.div>
				</nav>
				<Drawer
					title="Two-level Drawer"
					width={320}
					onClose={onChildrenDrawerClose}
					open={childrenDrawer}
				>
					This is two-level drawer
				</Drawer>
			</Drawer>

			<ModalComponent open={open} setOpen={setOpen}/>
		</>
	);
})

export default DrawerMenu