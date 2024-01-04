import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function DELETE(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id')

    await prisma.zapisi.delete({
      where: { id: parseInt(id) },
    });
    return NextResponse.json({ message: `Запись удалена` });
  } catch (error) {
    console.log("🚀 🚀zapisi: DELETE error:", error);
    return new NextResponse("Ошибка на сервере DELETE", { status: 500 });
  }
}







