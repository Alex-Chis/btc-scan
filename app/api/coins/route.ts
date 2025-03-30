import { NextResponse } from "next/server";
import prisma from "@/lib/db";

// GET all crypto coins
export async function GET(request: Request) {
  try {
    const coins = await prisma.cryptoCoin.findMany({
      include: { images: true },
    });

    return NextResponse.json({ coins });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch data from the database" },
      { status: 500 }
    );
  }
}

// POST create new crypto coin
export async function POST(request: Request) {
  try {
    const { name, description } = await request.json();

    const newCoin = await prisma.cryptoCoin.create({
      data: {
        name,
        description,
      },
    });

    return NextResponse.json({ coin: newCoin }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create crypto coin" },
      { status: 500 }
    );
  }
}
