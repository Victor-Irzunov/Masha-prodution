import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req, res) {
	// console.log('-----Запрос на сервере к БД за новыми отзывами' )
	try {
		const data = await prisma.otzyvy.findMany({
			where: {
				isNew: true,
			},
		});
		console.log("🚀 🚀 🚀  _ file: route.js:14 _ GET _ data:", data)
		return NextResponse.json(data);
	} catch (error) {
		return new NextResponse("Серверная ошибка Отзывы Get", { status: 500 });
	}
}


export async function POST(req, res) {
	try {
		const body = await req.json();
		console.log("🚀 🚀 🚀 otzyvy _ POST _ body:", body)
		const { name, vozvrast, city, tel, otzyv, rate } = body;
		const data = await prisma.otzyvy.create({
			data: {
				name,
				vozvrast,
				city,
				tel,
				otzyv,
				rate,
				response: '',
			},
		});

		if (data) {
			return NextResponse.json({ message: 'Ваш отзыв принят. Спасибо' });
		}

		return NextResponse.json({ message: 'Ошибка отзыва' });
	} catch (error) {
		console.log("🚀 POST error отзыв:", error);
		return new NextResponse("Ошибка на сервере создание отзыва", { status: 500 });
	}
}

export async function PUT(req, res) {
	try {
		const body = await req.json();
		const { id, response, isPublication } = body;
		const data = await prisma.otzyvy.update({
			where: { id },
			data: {
				response,
				isPublication,
				isNew: false,
			},
		});

		if (data) {
			return NextResponse.json({ message: 'Ваш ответ принят. Спасибо' });
		}

		return NextResponse.json({ message: 'Ошибка' });
	} catch (error) {
		console.log("🚀 PUT error:", error);
		return new NextResponse("Ошибка на сервере", { status: 500 });
	}
}


