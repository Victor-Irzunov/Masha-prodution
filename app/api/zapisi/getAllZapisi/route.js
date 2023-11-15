import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const start = searchParams.get("start");
    if (!start) {
      return new NextResponse("Нет даты", { status: 400 });
    }

    const date = new Date(start);
    const isoDate = date.toISOString().slice(0, 10);

    const nextDay = new Date(date);
    nextDay.setDate(date.getDate() + 1);
    const isoNextDay = nextDay.toISOString().slice(0, 10);

    const data = await prisma.zapisi.findMany({
      where: {
        start: {
          gte: new Date(isoDate),
          lt: new Date(isoNextDay),
        },
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    return new NextResponse("Серверная ошибка", { status: 500 });
  }
}
