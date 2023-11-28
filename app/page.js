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

          <div className='flex flex-col sd:flex-row sd:mt-16'>
            <div
              className='sd:hidden flex-shrink-0 sd:pr-8 xyy:pr-0 rounded-md sd:order-1 xyy:my-8 sd:my-0'
            >
              <Image
                src='/images/main/main.webp'
                alt='Психолог в Минске Ирзунова Мария'
                width={370}
                height={370}
                className='rounded-md shadow-md'
                loading="eager"
              />
            </div>
            <div className='flex-grow sd:order-2'>
              <p className='leading-6 tracking-wide font-light sd:text-base xyy:text-sm text-justify'>
                Здравствуйте, я рада представиться вам как одна из немногих сертифицированных клинических Приветствую вас! Меня зовут Мария Ирзунова, клинический и перинатальный психолог с медицинским образованием. Я сертифицированный специалист с более чем 9-летним опытом работы, являюсь Членом Международной Ассоциации Психологов и Членом Российской Ассоциации Психологов. Работая в сети клиник «Evaclinic» репродуктивного здоровья и ВРТ, а также проводя частные консультации в г.Минске и онлайн по всему миру, я готова помочь вам справиться с широким спектром психологических трудностей.
              </p>
              <p className='mt-6 mb-2'>
                Мои принципы в работе:
              </p>
              <ul className='font-light sd:text-base xyy:text-sm'>
                <li className='mb-1'>
                  1. Соблюдение конфиденциальности.
                </li>
                <li className='mb-1'>
                  2. Не вмешиваюсь, если нет необходимости.
                </li>
                <li className='mb-1'>
                  3. Упрощение, а не усложнение.
                </li>
                <li className='mb-1'>
                  4. Приоритет опыта клиента в терапии.
                </li>
                <li className='mb-1'>
                  5. Маленькие шаги вперёд всегда предпочтительнее застоя.
                </li>
                <li className='mb-1'>
                  6. Гибкость стратегии: если не работает — выбираю другую.
                </li>
                <li className='mb-1'>
                  7. Значимость теории до тех пор, пока она приносит улучшения.
                </li>
                <li className='mb-1'>
                  8. Использование лучших методик с научно подтвержденной эффективностью, с комбинированием для достижения оптимальных результатов.
                </li>
                <li className='mb-1'>
                  9. Индивидуальный подход к каждому клиенту, без строгих протоколов.
                </li>
              </ul>

              <p className='mt-3 sd:text-base xyy:text-sm'>
                Многие из моих клиентов делятся моими контактами с близкими и друзьями, что, на мой взгляд, лучше всего отражает эффективность моей работы. Позвольте мне быть вашим проводником к психологическому благополучию.
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
        <div className='z-50 fixed bottom-[100px] right-3 bg-black w-16 h-16 rounded-full flex justify-center items-center'>
          <PhoneOutlined
            className='text-white text-3xl animate-pulse'
          />
        </div>
      </a>
      {/* <FloatButton.BackTop /> */}
    </section>
  )
}
export default Home;
