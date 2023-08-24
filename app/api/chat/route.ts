import { NextResponse } from "next/server";
import { prisma } from "@/db";

export async function GET(req: Request) {
    // add join to the database
    const chatLog = await prisma.chatLog.findMany({
        orderBy: {
            globalTime: "asc",
        },
    });

    // return the response
    return NextResponse.json(chatLog);
}

export async function POST(req: Request) {
    // get the body of the request
    const { name, uuid, globalTime, localTime, message }: any =
        await req.json();

    const chatLog = await prisma.chatLog.create({
        data: {
            name,
            uuid,
            globalTime: globalTime.toString(),
            localTime: localTime.toString(),
            message,
        },
    });

    // return the response
    return NextResponse.json(chatLog);
}
