import { Button, Divider } from 'antd';
import { FormOutlined, PhoneOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { OnlineMainPageSection } from '../components/onlineMainPage/OnlineMainPageSection';
import { SectionFormMainPage } from '../components/formSectionMainPage/SectionFormMainPage';
import { ContentSection } from '../components/contentSection/ContentSection';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const SliderComp = dynamic(() => import('../components/slider/SliderComp'));
const BtnMenuNavigate = dynamic(() => import('../components/btnMenuNavigateMainPage/BtnMenuNavigate'));
const QuestionsMainPage = dynamic(() => import('../components/questionsMainPage/QuestionsMainPage'));
const TntVideoBlock = dynamic(() => import('../components/tnt/TntVideoBlock'));
const SectionMainPage = dynamic(() => import('../components/sectionMainPage/SectionMainPage'));
const FotoInfoMainPage = dynamic(() => import('../components/fotoInfoMainPage/FotoInfoMainPage'));
const ObratiliVnimanieBlock = dynamic(() => import('../components/obratiliVnimanieMainPage/ObratiliVnimanieBlock'));

const Home = () => {
  return (
    <section className='mt-6 overflow-hidden pt-8'>

      <div
        className='sd:px-10 xy:px-5'
      >
        <div className=''>
          <h1
            className='text-[#191c1d] sd:text-8xl xy:text-4xl font-semibold'>
            Психолог
            <span className='text-white'>
              {' '} Минск
            </span>
          </h1>

          <div className='flex flex-col md:flex-row md:mt-16'>
            <div className='flex-shrink-0 sd:pr-8 xyy:pr-0 rounded-md md:order-1 xyy:my-8 sd:my-0'>
              <Image
                src='/images/main/main.webp'
                alt='Психолог в Минске Ирзунова Мария'
                width={370}
                height={370}
                className='rounded-md shadow-md'
                loading="eager"
              />
            </div>
            <div className='flex-grow md:order-2'>
              <p className='leading-6 tracking-wide font-light sd:text-base xyy:text-sm text-justify'>
                Здравствуйте, я рада представиться вам как одна из немногих сертифицированных клинических психологов, практикующих в Минске и обладающих более чем 8-летним профессиональным стажем. Моя основная цель заключается в оказании вам помощи и поддержки. Мое обширное поле экспертизы включает все аспекты психологических и эмоциональных трудностей, которые вы можете встретить в своей жизни. Я готова помочь вам справиться с психологическим бесплодием, депрессией, паникой, обсессивно-компульсивным расстройством, проблемами в отношениях, связанными с тревогой, физическими и эмоциональными расстройствами, а также с проблемами со сном, стрессом, навязчивыми мыслями, семейными и супружескими конфликтами, социальной тревожностью и посттравматическими расстройствами. Позвольте мне быть рядом с вами и помочь вам на вашем пути к благополучию и психологическому здоровью.
              </p>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-around mt-20 xy:items-center xx:items-center sd:items-start xx:flex-col xy:flex-col sd:flex-row'
        >
          <div className='mb-5'>
            <Button type='primary' style={{ color: "#fff" }} shape="round" size='large' icon={<FormOutlined />}>
              <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/zapis-k-psikhologu`} className='text-white'>
                {' '}записаться на консультацию
              </Link>
            </Button>
          </div>
          <div className='z-10'>
            <BtnMenuNavigate />
          </div>
        </div>
        <div
          className='mt-8 text-center '>
          <SliderComp />
        </div>
      </div>
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
      {/* <FloatButton.BackTop /> */}
    </section>
  )
}
export default Home
