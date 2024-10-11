import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const lotId = searchParams.get("lot_id");
  console.log("=====lotId===>", lotId);
  try {
    if (lotId) {
      const [rows] = await db.execute(
        `SELECT ld.*, m.mat_name, c.cat_name 
        FROM lot_detail AS ld
        LEFT JOIN material AS m ON ld.lot_mat_id = m.mat_id
        LEFT JOIN category AS c ON ld.lot_cat_id = c.cat_id
        WHERE ld.lot_id = ?`,
        [lotId]
      );
      if (rows.length === 0) {
        return NextResponse.json({ message: "Lot not found" }, { status: 404 });
      }
      return NextResponse.json({ data: rows[0] }, { status: 200 });
    } else {
      const [rows] = await db.execute("SELECT * FROM lot_detail");
      return NextResponse.json({ data: rows }, { status: 200 });
    }
  } catch (error) {
    console.log("==error in fetching bid details===>", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
