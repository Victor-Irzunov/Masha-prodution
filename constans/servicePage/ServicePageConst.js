import konsultaciya from '../../public/images/service/konsultaciya.webp'
import perinatalnyj from '../../public/images/service/perinatalnyj.webp'
import semejnyj from '../../public/images/service/semejnyj.webp'
import podrostkovyj from '../../public/images/service/podrostkovyj.webp'
import offline from '../../public/images/service/1.svg'
import online from '../../public/images/service/2.svg'

export const data = [
	{
		id: 1,
		h3: 'Индивидуальная консультация',
		link: 'индивидуальная-консультация',
		img: konsultaciya,
		type: [
			{
				id:1,
				img: online,
				title: 'онлайн',
				text:'удаленно через skype или zoom'
			},
			{
				id:2,
				img: offline,
				title: 'в кабинете',
				text:'очно с посещением кабинета'
			},
		],
		li: [
			{
				id: 1,
				link: 'депрессия',
				li:'Депрессия',
			},
			{
				id: 2,
				link: '',
				li:'Стресс'
			},
			{
				id:3,
				link: '',
				li:'Злость'
			},
			{
				id:4,
				link: '',
				li:'Обида'
			},
			{
				id:5,
				link: '',
				li:'Сложно сделать выбор'
			},
		]
	},
	{
		id: 2,
		h3: 'Консультация перинатального психолога',
		link: 'консультация-перинатального-психолога',
		img: perinatalnyj,
		type: [
			{
				id:1,
				img: online,
				title: 'онлайн',
				text:'удаленно через skype или zoom'
			},
			{
				id:2,
				img: offline,
				title: 'в кабинете',
				text:'очно с посещением кабинета'
			},
		],
		li: [
			{
				id: 1,
				link: 'бесплодие',
				li:'Бесплодие'
			},
			{
				id: 2,
				link: '',
				li:'Сопровождение беременности'
			},
			{
				id:3,
				link: '',
				li:'Подготовка к родам'
			},
			{
				id:4,
				link: '',
				li:'После родовая терапия'
			},
			{
				id:5,
				link: '',
				li:'Психолог для беременной'
			},
		]
	},
	{
		id: 3,
		h3: 'Консультация семейного психолога',
		link: 'семейный-психолог',
		img: semejnyj,
		type: [
			{
				id:1,
				img: offline,
				title: 'в кабинете',
				text:'очно с посещением кабинета'
			},
		],
		li: [
			
			{
				id: 1,
				link: '',
				li:'Проблемы в отношениях'
			},
			{
				id: 2,
				link: '',
				li:'Подготовка к родительству'
			},
			{
				id:3,
				link: '',
				li:'Поддрежка при разводе'
			},
			{
				id:4,
				link: '',
				li:'Проблемы в воспитании детей'
			},
		]
	},
	{
		id: 4,
		h3: 'Консультация подросткового психолога',
		link: 'психолог-для-подростка',
		img: podrostkovyj,
		type: [
			{
				id:1,
				img: online,
				title: 'онлайн',
				text:'удаленно через skype или zoom'
			},
			{
				id:2,
				img: offline,
				title: 'в кабинете',
				text:'очно с посещением кабинета'
			},
		],
		li: [
			{
				id: 1,
				link: '',
				li:'Комплексы и страхи'
			},
			{
				id: 2,
				link: '',
				li:'Замкнутость и подозрительность'
			},
			{
				id:3,
				link: '',
				li:'Вспыльчивость'
			},
			{
				id:4,
				link: '',
				li:'Ухудшение успеваемости'
			},
		]
	},
]