import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req, { params: { id } }) {
  try {
    const data = await prisma.articles.findUnique({
      where: {
        id: +id,
      },
    });

    if (!data) {
      return new NextResponse("Нет статьи", { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("🚀 🚀 🚀 Err in GET:", error);
    return new NextResponse("Серверная ошибка", { status: 500 });
  }
}
