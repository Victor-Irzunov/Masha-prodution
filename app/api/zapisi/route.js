import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req, res) {
  try {
    const data = await prisma.zapisi.findMany();
    // console.log("🚀 🚀 🚀 zapisi: GET data:", data);

    if (data.length) {
      return NextResponse.json(data)
    }
    return new NextResponse("Записей нет", { status: 400 });

  } catch (error) {
    return new NextResponse("Серверр ошибка Записи GET", { status: 500 });
  }
}

export async function POST(req, res) {
  try {

    const body = await req.json()
    const { start, end, title, tel, type, zapros} = body;
    const allDay = Boolean(body.allDay);
    const result = await prisma.zapisi.create({
      data: {
        start,
        end,
        title,
        allDay,
        tel,
        type,
        zapros,
      },
    });
    console.log("🚀 🚀 🚀 zapisi: POST data:", result);
    return  NextResponse.json(result);

  } catch (error) {
    console.log("🚀 🚀zapisi: POST error:", error);
    return new NextResponse("Ошибка на серверре", { status: 500 });
  }
}

export async function DELETE(req, res) {
  try {
    const { id } = req.params;
    await prisma.zapisi.delete({
      where: { id: parseInt(id) }, // Парсим id в число, так как он ожидается в числовом формате
    });
    return NextResponse.json({ message: `Запись удалена` });
  } catch (error) {
    console.log("🚀 🚀zapisi: DELETE error:", error);
    return new NextResponse("Ошибка на сервере", { status: 500 });
  }
}

export async function PUT(req, res) {
  try {
    const body = await req.json();
    const { id, start, end, title, allDay, tel, type, zapros } = body;
    const data = await prisma.zapisi.update({
      where: { id },
      data: {
        start,
        end,
        title,
        allDay,
        tel,
        type,
        zapros,
      },
    });
    return NextResponse.json(data);
  } catch (error) {
    console.log("🚀 🚀zapisi: PUT error:", error);
    return new NextResponse("Ошибка на сервере", { status: 500 });
  }
}





