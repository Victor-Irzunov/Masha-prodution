"use client"
import { Button, FloatButton } from 'antd'
import { motion } from "framer-motion"
import { useScreens } from '../../constans/constScreens'

export const FooterComp = () => {
  const screens = useScreens()

  const titleAnimation = {
    hidden: {
      y: 100,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.7
      }
    }
  }
  const titleAnimation3 = {
    hidden: {
      y: -100,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.7
      }
    }
  }

  const adressAnimation = {
    hidden: {
      y: 100,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.7
      }
    }
  }

  return (
    <footer className='sd:px-10 xy:px-5 pt-10 bg-white h-[80vh] flex overflow-hidden'>
      <FloatButton.BackTop />
      <div className='sd:ml-10 xy:ml-0 flex flex-col justify-between'>
        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            className='flex mb-0'
          >
            <motion.h2
              variants={titleAnimation}
              className='sd:text-8xl xy:text-4xl font-extrabold uppercase sd:mr-8 xy:mr-3'
            >
              мария
            </motion.h2>
            <motion.h2
              variants={titleAnimation3}
              className='sd:text-8xl xy:text-4xl font-extrabold uppercase'
            >
              ирзунова
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            className='mt-0'
          >
            <motion.h3
              variants={titleAnimation}
              className='sd:text-4xl xy:text-xl font-extrabold uppercase'
            >
              психолог в Минске
            </motion.h3>
          </motion.div>
        </div>


        <motion.div
          initial="hidden"
          whileInView="visible"
          className=''
        >
          <motion.div
            variants={adressAnimation}
            className='flex justify-between sd:items-center xy:items-start xy:flex-col sd:flex-row h-full'>
            <div className='text-xl font-extralight'>
              <p>г.Минск, Франциска Скорины, 15</p>
              <p>mariairzunova@yandex.ru</p>
              <a href='tel:80298884002'>+375 29 888-40-02</a>
            </div>
            <a href='https://www.instagram.com/psy_irzunova/' target='_blank'>
              <Button
                type='primary'
                shape="round"
                size={screens.md ? 'large' : 'middle'}
                className={screens.md ? 'mt-0' : 'mt-7'}
              >
                instagram
              </Button>
            </a>
          </motion.div>
        </motion.div>

        <div className='flex justify-between items-start xy:flex-col sd:flex-row pb-5'>
          {/* <p className='text-gray-400 xy:mb-0 uppercase text-xs'>психолог мария ирзунова Ⓒ 2015-2023</p> */}
          <p className="
      font-poppins
      font-normal
      text-left
      sm:text-[14px]
      xy:text-[10px]
   
      text-gray-400
      mt-0
      ">
            Copyright Ⓒ 2023. Разработка и продвижение
            <a href="https://vi-tech.by" className="text-gradient text-cyan-400" target="_blank">
              {' '}VI:TECH
            </a>
            &nbsp; Информация на сайте не является публичной офертой и предоставляется исключительно в информационных целях.
          </p>
        </div>
      </div>
    </footer>
  )
}
