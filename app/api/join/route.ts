import { NextResponse } from "next/server";
import { prisma } from "@/db";

export async function POST(req: Request) {
    // get the body of the request
    const { name, uuid, globalTime, localTime }: any = await req.json();

    // add join to the database
    const joinLog = await prisma.joinLog.create({
        data: {
            name,
            uuid,
            globalTime: globalTime.toString(),
            localTime: localTime.toString(),
        },
    });

    console.log("Join log added to database\n", joinLog);

    // return the response
    return NextResponse.json(joinLog);
}
