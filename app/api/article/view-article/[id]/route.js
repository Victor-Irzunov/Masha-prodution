import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function PUT(req, { params: { id } }) {
  try {
    const updatedData = await prisma.articles.update({
      where: {
        id: +id,
      },
      data: {
        view: {
          increment: 1
        },
        count: {
          increment: 1
        },
      },
    });

    if (updatedData) {
      return NextResponse.json({ message: 'Просмотр статьи' });
    }
  } catch (error) {
    console.error("🚀 🚀 🚀 Err in PUT:", error);
    return new NextResponse("Серверная ошибка", { status: 500 });
  }
}
