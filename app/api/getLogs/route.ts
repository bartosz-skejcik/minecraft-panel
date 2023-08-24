import { NextResponse } from "next/server";
import { prisma } from "@/db";

export async function GET(req: Request) {
    // add join to the database
    const joinLog = await prisma.joinLog.findMany({
        orderBy: {
            globalTime: "desc",
        },
    });

    // return the response
    return NextResponse.json(joinLog);
}
