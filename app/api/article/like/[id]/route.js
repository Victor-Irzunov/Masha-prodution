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
        like: {
          increment: 1, // Увеличьте поле like на 1
        },
      },
    });

    if (updatedData) {
      return NextResponse.json({ message: 'Ваша оценка принята, спасибо)' });
    }
  } catch (error) {
    console.error("🚀 🚀 🚀 Err in PUT:", error);
    return new NextResponse("Серверная ошибка", { status: 500 });
  }
}
