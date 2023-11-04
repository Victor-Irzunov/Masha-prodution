import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req, { params: { group } }) {
  console.log('-----------------')
  console.log('-----------------')
  console.log('-----------------')
  try {

    const data = await prisma.articles.findMany({
      where: {
        group: group,
      },
    });

    if (!data.length) {
      return NextResponse.json({ message: 'Нет статей' });
    }

    return NextResponse.json(data);

  } catch (error) {
    console.error("🚀 🚀 🚀 Err in GET:", error);
    return new NextResponse("Серверная ошибка", { status: 500 });
  }
}
