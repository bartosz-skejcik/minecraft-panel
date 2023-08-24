import { NextResponse } from "next/server";
import { prisma } from "@/db";

export async function POST(req: Request) {
    // get the body of the request
    const { name, uuid, globalTime, localTime }: any = await req.json();

    // add join to the database
    const quitLog = await prisma.quitLog.create({
        data: {
            name,
            uuid,
            globalTime: globalTime.toString(),
            localTime: localTime.toString(),
        },
    });

    // return the response
    return NextResponse.json(quitLog);
}
