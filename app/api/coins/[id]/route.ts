import { NextResponse } from "next/server";
import prisma from "@/lib/db";

// GET single crypto coin by ID
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const coin = await prisma.cryptoCoin.findUnique({
      where: { id: params.id },
      include: { images: true },
    });

    if (!coin) {
      return NextResponse.json(
        { error: "Crypto coin not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ coin });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch crypto coin" },
      { status: 500 }
    );
  }
}

// PUT update crypto coin by ID
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { name, description } = await request.json();

    const updatedCoin = await prisma.cryptoCoin.update({
      where: { id: params.id },
      data: {
        name,
        description,
      },
    });

    return NextResponse.json({ coin: updatedCoin });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update crypto coin" },
      { status: 500 }
    );
  }
}

// DELETE crypto coin by ID
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // First delete related images (due to foreign key constraint)
    await prisma.image.deleteMany({
      where: { cryptoId: params.id },
    });

    // Then delete the coin
    await prisma.cryptoCoin.delete({
      where: { id: params.id },
    });

    return NextResponse.json(
      { message: "Crypto coin deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete crypto coin" },
      { status: 500 }
    );
  }
}
