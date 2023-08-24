/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

type Props = {};

export default function Chat({}: Props) {
    const [chatLog, setChatLog] = useState<any[]>([]);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch("/api/chat");

            const data = await res.json();

            console.log(data);
            setChatLog(data);
        };

        getData();
    }, []);

    return (
        <div className="flex flex-col items-start justify-center w-full h-full">
            <h1 className="text-4xl font-semibold text-neutral-200">Chat</h1>
            <div className="w-full h-full flex-grow gap-2 flex flex-col px-4 py-6 items-start justify-start flex-shrink rounded-lg bg-neutral-900 mt-5 border border-neutral-500">
                {chatLog.map((log, index) => {
                    return (
                        <div
                            key={index}
                            className="p-1 flex items-center justify-start w-full"
                        >
                            <p className="mr-3 text-neutral-500">
                                {"["}
                                {new Date(parseInt(log.globalTime)).getHours()}:
                                {new Date(
                                    parseInt(log.globalTime)
                                ).getMinutes()}
                                :
                                {new Date(
                                    parseInt(log.globalTime)
                                ).getSeconds()}
                                {"]"}
                            </p>
                            <img
                                src={`https://crafatar.com/avatars/${log.uuid}?size=32&overlay`}
                                className="w-6 h-6 rounded-lg"
                                alt={log.name}
                            />
                            <div className="ml-3 text-lg">
                                <p>
                                    {"<"}
                                    <span className="text-blue-500">
                                        {log.name}
                                    </span>
                                    {">"} {log.message}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
