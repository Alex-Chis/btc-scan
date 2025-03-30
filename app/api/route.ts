import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const coins = await prisma.cryptoCoin.findMany({
      include: { images: true }, // Include related images for each coin
    });

    return NextResponse.json({
      coins,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch data from the database" },
      { status: 500 }
    );
  }
}
