import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req, res) {
  try {
    const data = await prisma.zapisi.findMany();
    if (data.length) {
      return NextResponse.json(data)
    }
    return NextResponse.json({ message: `Записей нет` });

  } catch (error) {
    return new NextResponse("Серверр ошибка Записи GET", { status: 500 });
  }
}

export async function POST(req, res) {
  try {

    const body = await req.json()
    const { start, end, title, tel, type, zapros } = body;
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
    // console.log("🚀 🚀 🚀 zapisi: POST data:", result);
    return NextResponse.json(result);

  } catch (error) {
    console.log("🚀 🚀zapisi: POST error:", error);
    return new NextResponse("Ошибка на серверре zapisi: POST", { status: 500 });
  }
}

export async function DELETE(req, res) {
  console.log('---------DELETE---------------' )
  try {
    const { id } = req.params;
    console.log("🚀 🚀 🚀  _ file: route.js:49 _ DELETE _ id:", id)
    console.log('-----typeof id: ', typeof id)

    
    await prisma.zapisi.delete({
      where: { id: parseInt(id) },
    })
    return NextResponse.json({ message: `Запись удалена` });
  } catch (error) {
    console.log("🚀 🚀zapisi: DELETE error:", error);
    return new NextResponse("Ошибка на сервере DELETE", { status: 500 });
  }
}

export async function PUT(req, res) {
  console.log('--------PUT-------' )
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





