import prisma from "@/lib/db";

export async function GET(request: Request) {
  try {
    createCryptoEntry();
  } catch (error) {
    console.log(error);
  }

  const coins = await prisma.cryptoCoin.findMany();
  const images = await prisma.image.findMany({ include: { crypto: true } });
  return Response.json(images);
}

async function createCryptoEntry() {
  const crypto = await prisma.cryptoCoin.create({
    data: {
      name: "Bitcoin",
      description: "King of Crypto",
      images: {
        create: [
          { path: "/btc-scan/public/vercel.svg", description: "Vercel logo" },
          {
            path: "/btc-scan/public/next.svg",
            description: "Next logo",
          },
        ],
      },
    },
    include: { images: true },
  });
}
