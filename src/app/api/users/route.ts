import { NextResponse } from "next/server";

let users = [
  { id: 1, name: "Juan Pérez", email: "juan@mail.com", status: "active" },
  { id: 2, name: "María López", email: "maria@mail.com", status: "suspended" },
];

export async function GET() {
  return NextResponse.json(users);
}
