import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req, res) {
  try {
    const data = await prisma.otzyvy.findMany();
    
    if (!data || data.length === 0) {
      return new NextResponse("Нет отзывов", { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return new NextResponse("Серверная ошибка", { status: 500 });
  }
}

