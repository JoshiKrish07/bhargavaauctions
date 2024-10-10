import db from "@/utils/db";
import { NextResponse } from 'next/server';

export async function GET(req) {
    
    try {
        
        const [rows] = await db.execute('SELECT * FROM auction_detail WHERE auct_status = ?', ['live']);
        return NextResponse.json({ data: rows }, { status: 200 });

    } catch (error) {
        console.log("error in fetching live auctions", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }

} 