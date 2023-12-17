import Image from "next/image"
import info from '../../public/images/Info.svg'

export const metadata = {
	title: 'Психолог Минск цена | Ирзунова Мария',
	description: 'Стоимость консультации психолога в Минске. ☝ Лучший частный психолог принимает в Минске. Узнать стоимость услуги и записаться ✍️ на консультацию.',
	alternates: {
		canonical: 'https://irzunova.by/stoimost-psihologa'
	},
	og: {
		title: 'Психолог Минск цена | Ирзунова Мария',
		description: 'Стоимость консультации психолога в Минске. ☝ Лучший частный психолог принимает в Минске. Узнать стоимость услуги и записаться ✍️ на консультацию.',
		type: 'website',
		url: 'https://irzunova.by/stoimost-psihologa',
		image: '/images/main/main.webp',
	},
}


const PricePage = () => {

	return (
		<section className='pt-10'>

			<div className='sd:px-10 xy:px-5'>
				<h1
					className='sd:text-6xl xy:text-4xl text-[#191c1d] font-extrabold uppercase'
				>
					Цена психолога в Минске
				</h1>
				<h2
					className='text-white sd:text-4xl xy:text-2xl font-bold mt-20'
				>
					Прейскурант цен за одну консультацию психолога
				</h2>
				<p className='sd:mt-20 xy:mt-6 font-light tracking-wide text-sm'>
					Психологическая консультация предоставляется в двух форматах: онлайн и офлайн. Онлайн-формат предусматривает проведение консультации удаленно, с использованием телефонной связи или компьютерных коммуникационных средств. Офлайн-формат предполагает личное присутствие в кабинете психолога, расположенного недалеко от Национальной библиотеки (станция метро "Восток"). Важно отметить, что независимо от выбранного формата, стоимость консультации остается постоянной.
				</p>
			</div>

			<div className='sd:mt-24 xy:mt-12 sd:px-10 xy:px-5'>
				<div className='flex justify-between items-center'>
					<div className='w-1/4 invisible m-0.5'></div>
					<div className='w-1/4 h-20 shadow-lg bg-lime-600 flex justify-center items-center m-0.5'>
						<p className='uppercase text-white sd:text-[10px] xy:text-[8px] mb-0'>стоимость</p>
					</div>
					<div className='w-1/4 h-20 shadow-lg bg-gray-700 flex justify-center items-center m-0.5'>
						<p className='uppercase text-white sd:text-[10px] xy:text-[8px] mb-0 text-center'>время <br />консультации</p>
					</div>
					<div className='w-1/4 h-20 shadow-lg bg-gray-700 flex justify-center items-center m-0.5'>
						<div className='text-center'>
							<p className='uppercase text-white sd:text-[10px] xy:text-[8px] mb-0'>приём</p>
						</div>
					</div>
				</div>

				<div className='flex justify-between items-center'>
					<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
						<div className='text-center'>
							<p className='uppercase text-black sd:text-[12px] xy:text-[8px] mb-0 font-semibold'>индивидуальная</p>
							<p className='uppercase text-black sd:text-[12px] xy:text-[8px] mb-0 font-semibold'>консультация</p>
						</div>
					</div>
					<div className='w-1/4 h-20 shadow-lg bg-lime-600 text-center flex flex-col justify-center items-center m-0.5 font-semibold'>
						<p className='text-white text-[13px] mb-0'>95,00 руб</p>
					</div>
					<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
						<p className='text-black text-[13px] mb-0'>60 мин.</p>
					</div>
					<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
						<div className='text-center'>
							<p className='text-black sd:text-[13px] xy:text-[11px] mb-0'>онлайн /</p>
							<p className='text-blacksd:text-[13px] xy:text-[11px] mb-0'>в кабинете</p>
						</div>
					</div>
				</div>

				{/* <div className='flex justify-between items-center'>
					<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
						<div className='text-center sd:text-[12px] xy:text-[8px]'>
							<p className='uppercase text-black mb-0 font-semibold'>консультация</p>
							<p className='uppercase text-black mb-0 font-semibold'>перинатального</p>
							<p className='uppercase text-black mb-0 font-semibold'>психолога</p>
						</div>
					</div>
					<div className='w-1/4 h-20 shadow-lg bg-lime-600 flex justify-center items-center m-0.5'>
						<p className='text-white text-[13px] mb-0 uppercase'>96,00 руб</p>
					</div>
					<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
						<p className='text-black text-[13px] mb-0'>1 час</p>
					</div>
					<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
						<div className='text-center'>
							<p className='text-black sd:text-[13px] xy:text-[11px] mb-0'>онлайн /</p>
							<p className='text-black sd:text-[13px] xy:text-[11px] mb-0'>в кабинете</p>
						</div>
					</div>
				</div> */}

				<div className='flex justify-between items-center'>
					<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
						<div className='text-center sd:text-[12px] xy:text-[8px]'>
							<p className='uppercase text-black mb-0 font-semibold'>семейная</p>
							<p className='uppercase text-black mb-0 font-semibold'>консультация</p>
						</div>
					</div>
					<div className='w-1/4 h-20 shadow-lg bg-lime-600 flex justify-center items-center m-0.5'>
						<p className='text-white text-[13px] mb-0 font-semibold'>120,00 руб</p>
					</div>
					<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
						<p className='text-black text-[13px] mb-0 '>90 мин.</p>
					</div>
					<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
						<div className='text-center'>
							<p className='text-blacksd:text-[13px] xy:text-[11px] mb-0'>в кабинете</p>
						</div>
					</div>
				</div>

				<div className='flex justify-between items-center'>
					<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
						<div className='text-center sd:text-[12px] xy:text-[8px]'>
							<p className='uppercase text-black mb-0 font-semibold'>консультация</p>
							<p className='uppercase text-black mb-0 font-semibold'>с подростком</p>
							<p className='uppercase text-black mb-0 font-semibold'>15-19 лет</p>
						</div>
					</div>
					<div className='w-1/4 h-20 shadow-lg bg-lime-600 flex justify-center items-center m-0.5'>
						<p className='text-white text-[13px] mb-0'>85,00 руб</p>
					</div>
					<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
						<p className='text-black text-[13px] mb-0'>60 мин.</p>
					</div>
					<div className='w-1/4 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
						<div className='text-center sd:text-[13px] xy:text-[11px]'>
							<p className='text-black mb-0'>онлайн /</p>
							<p className='text-black mb-0'>в кабинете</p>
						</div>
					</div>
				</div>
			</div>

			<div className='mt-10 text-gray-600 font-light leading-5 sd:px-10 xy:px-5 text-sm'>
				<div className='flex'>
					<Image src={info} width={30} height={30} className="animate-bounce" alt="Информация для клиента" />
					<p className="font-semibold ml-3">
					На второй индивидуальной консультации и последующих сессиях стоимость составляет <span className="bg-lime-600 p-1 text-white leading-8">85,00 рублей</span>.
					</p>
				</div>
				<p className="mt-8">
					Оплатить консультацию можно наличными или сделать перевод с банковской карты или через ЕРИП.
				</p>
			</div>

			<section className='sd:px-10 xy:px-5 py-10 bg-[#191c1d] mt-20'>
				<div className='container'>
					<div className=''>
						<div
							className='sd:text-lg xy:text-sm font-light tracking-wider text-white'
						>
							<h3 className="text-lg font-bold mb-3">
								Стоимость консультации психолога
							</h3>
							<p className=''>
								Забота о своем психическом здоровье стала неотъемлемой частью современной жизни. В мире, где стресс и нервное напряжение становятся все более распространенными, обращение к психологам становится важным шагом на пути к гармонии и балансу. Однако, помимо внутренних сомнений и страхов, люди также сталкиваются с вопросом о стоимости консультации у специалиста.
							</p>
							<p className=''>
								"Стоимость психолога" может вызывать интерес и неопределенность у многих. Важно понимать, что цена консультации может варьироваться в зависимости от ряда факторов. Однако, решение обратиться к психологу необходимо воспринимать как вложение в свое здоровье и благополучие.
							</p>
							<p className=''>
								Факторы, влияющие на стоимость консультации психолога, могут быть разнообразными. Опыт и квалификация специалиста играют важную роль в определении цены. Психологи с богатым опытом работы и дополнительными сертификациями могут взимать более высокую плату за свои услуги. Однако стоит помнить, что высокая цена не всегда гарантирует идеальное качество.
							</p>
							<p className=''>
								Также стоимость консультации может зависеть от формата встречи. Индивидуальные сессии могут стоить больше, чем групповые, так как внимание психолога будет полностью сосредоточено на одном клиенте. Групповые сессии, в свою очередь, могут быть более доступными с финансовой точки зрения, но их эффективность может отличаться в зависимости от потребностей каждого конкретного человека.
							</p>
							<p className=''>
								Важно заметить, что стоимость консультации психолога также может варьироваться в зависимости от местоположения. В больших городах цены, как правило, выше из-за более высоких операционных расходов. В то время как в небольших населенных пунктах стоимость может быть ниже.
							</p>
							<p className=''>
								Многие психологи также предлагают различные пакеты услуг, которые могут включать в себя несколько сессий с небольшой скидкой по сравнению с оплатой за каждую сессию отдельно. Это может быть выгодным вариантом для тех, кто рассматривает долгосрочное сотрудничество с психологом.
							</p>
							<p className=''>
								Важно отметить, что выбор психолога не должен основываться исключительно на стоимости его услуг. Качество и профессионализм имеют огромное значение. Перед выбором специалиста рекомендуется изучить его образование, опыт работы, методы работы и отзывы клиентов. Это поможет сделать осознанный выбор и выбрать психолога, который подходит именно вам.
							</p>
							<p className=''>
								Итоговая стоимость консультации психолога - это результат взвешенного соотношения множества факторов. Она может варьироваться, но важно помнить, что забота о своем психическом здоровье является важным вложением в себя. Не стоит экономить на таком важном аспекте жизни. В конечном итоге, результаты работы с квалифицированным психологом могут быть бесценными и внести позитивные изменения во всех сферах вашей жизни.
							</p>

						</div>
						<div className='w-[60%] pt-10' />
					</div>
				</div>
			</section>
		</section>
	)
}

export default PricePage
