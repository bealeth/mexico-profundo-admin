import { NextResponse } from "next/server";

let content = [
  {
    id: 1,
    title: "Artesanías de Oaxaca",
    author: "Carlos",
    status: "pending",
  },
  {
    id: 2,
    title: "Textiles Mayas",
    author: "Ana",
    status: "approved",
  },
];

export async function GET() {
  return NextResponse.json(content);
}

export async function PUT(request: Request) {
  const { id, status } = await request.json();

  return NextResponse.json({
    message: `Contenido ${id} actualizado a ${status}`,
  });
}
