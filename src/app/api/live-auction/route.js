import db from "@/utils/db";
import { NextResponse } from 'next/server';

export async function GET(req) {
    
    const { searchParams } = new URL(req.url);
    const auctId = searchParams.get('auct_id'); 
    console.log("=====auctId===>", auctId);

    try {
        
        if(auctId) {
            
            const [rows] = await db.execute('SELECT * FROM auction_detail WHERE auct_id = ?', [auctId]); 
            if (rows.length === 0) {
                return NextResponse.json({ message: 'Auction not found' }, { status: 404 });
            }
            return NextResponse.json({ data: rows[0] }, { status: 200 });

        } else {
            const [rows] = await db.execute('SELECT * FROM auction_detail WHERE auct_status = ?', ['LIVE']);
            return NextResponse.json({ data: rows }, { status: 200 });
        }

    } catch (error) {
        console.log("error in fetching live auctions", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }

} 