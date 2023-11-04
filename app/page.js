"use client"
import { Button, Divider, FloatButton } from 'antd'
import { FormOutlined, PhoneOutlined } from '@ant-design/icons'
import { SliderComp } from '../components/slider/SliderComp'
import Link from 'next/link'
import { motion } from "framer-motion"
import { BtnMenuNavigate } from '../components/btnMenuNavigateMainPage/BtnMenuNavigate'
import { SectionMainPage } from '../components/sectionMainPage/SectionMainPage'
// import TextAnimationScroll from '@/components/textAnimationScroll/TextAnimationScroll'
import { QuestionsMainPage } from '../components/questionsMainPage/QuestionsMainPage'
import { FotoInfoMainPage } from '../components/fotoInfoMainPage/FotoInfoMainPage'
import { TntVideoBlock } from '../components/tnt/TntVideoBlock'
import { ObratiliVnimanieBlock } from '../components/obratiliVnimanieMainPage/ObratiliVnimanieBlock'
import { OnlineMainPageSection } from '../components/onlineMainPage/OnlineMainPageSection'
import { SectionFormMainPage } from '../components/formSectionMainPage/SectionFormMainPage'
import { ContentSection } from '../components/contentSection/ContentSection'
import { titleAnimation, imageAnimation } from '../constans/animation/AnimationConst'

const Home = () => {
  return (
    <section className='mt-6 overflow-hidden pt-8'>
     
      <motion.div
        initial="hidden"
        whileInView="visible"
        className='sd:px-10 xy:px-5'
      >
        <div className=''>
          <motion.h1
            variants={titleAnimation}
            custom={1}
            className='text-[#191c1d] sd:text-8xl xy:text-4xl font-semibold'>
            Психолог
            <span className='text-white'>
              {' '} Минск
            </span>
          </motion.h1>
          <motion.p
            variants={titleAnimation}
            custom={4}
            className='leading-6 tracking-wide font-light mt-8 text-sm'
          >
            Здравствуйте, я рада представиться вам как одна из немногих сертифицированных клинических психологов, практикующих в Минске и обладающих более чем 8-летним профессиональным стажем. Моя основная цель заключается в оказании вам помощи и поддержки. Мое обширное поле экспертизы включает все аспекты психологических и эмоциональных трудностей, которые вы можете встретить в своей жизни. Я готова помочь вам справиться с психологическим бесплодием, депрессией, паникой, обсессивно-компульсивным расстройством, проблемами в отношениях, связанными с тревогой, физическими и эмоциональными расстройствами, а также с проблемами со сном, стрессом, навязчивыми мыслями, семейными и супружескими конфликтами, социальной тревожностью и посттравматическими расстройствами. Позвольте мне быть рядом с вами и помочь вам на вашем пути к благополучию и психологическому здоровью.
          </motion.p>
        </div>
        <div className='w-full flex justify-around mt-20 xy:items-center xx:items-center sd:items-start xx:flex-col xy:flex-col sd:flex-row'
        >
          <motion.div
            variants={titleAnimation}
            custom={8}
            className='mb-5'
          >
            <Button type='primary' style={{ background: "" }} shape="round" size='large' icon={<FormOutlined />}>
              <Link href='/zapis-k-psikhologu'>
                {' '}записаться на консультацию
              </Link>
            </Button>
          </motion.div>
          <motion.div
            variants={titleAnimation}
            custom={10}
            className='z-10'
          >
            <BtnMenuNavigate />
          </motion.div>
        </div>
        <motion.div
          variants={imageAnimation}
          className='mt-8 text-center '>
          <SliderComp />
        </motion.div>
      </motion.div>

      <SectionMainPage />
      <Divider />
      <QuestionsMainPage />
      <FotoInfoMainPage />
      <TntVideoBlock />
      <ObratiliVnimanieBlock />
      <OnlineMainPageSection />
      <ContentSection />
      <SectionFormMainPage />
      <a href='tel:80298884002'>
        <div className='fixed bottom-[100px] right-3 bg-black w-16 h-16 rounded-full flex justify-center items-center'>
          <PhoneOutlined
            className='text-white text-3xl animate-pulse'
          />
        </div>
      </a>
      <FloatButton.BackTop />
    </section>
  )
}
export default Home
