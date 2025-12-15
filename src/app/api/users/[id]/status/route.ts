import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { status } = await request.json();

  return NextResponse.json({
    message: `Usuario ${params.id} actualizado a estado ${status}`,
  });
}
