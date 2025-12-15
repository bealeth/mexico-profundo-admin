import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    totalUsers: 120,
    activeMicrosites: 35,
    monthlyRevenue: 48000,
  });
}
