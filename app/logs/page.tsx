"use client";

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

type Props = {};

export default function Logs({}: Props) {
    const [joinLog, setJoinLog] = useState<any[]>([]);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch("/api/getLogs");

            const data = await res.json();

            console.log(data);
            setJoinLog(data);
        };

        getData();
    }, []);

    return (
        <div className="flex flex-col items-start justify-center w-full h-full">
            <h1 className="text-4xl font-semibold text-neutral-200">
                Join/Leave Logs
            </h1>
            <div className="w-full h-full flex-grow gap-2 flex flex-col px-4 py-6 items-start justify-start flex-shrink rounded-lg bg-neutral-800 mt-5">
                {joinLog.map((log, index) => {
                    return (
                        <div
                            key={index}
                            className="p-3 rounded-xl flex items-center justify-start w-full bg-neutral-700"
                        >
                            <p className="mr-3">
                                {/* show the date time formated fom log.globalTime (eg. globalTime = 1692260513441) */}
                                {new Date(
                                    parseInt(log.globalTime)
                                ).toLocaleString()}
                            </p>
                            <img
                                src={`https://crafatar.com/avatars/${log.uuid}?size=32&overlay`}
                                className="w-10 h-10 rounded-lg"
                            />
                            <div className="ml-3">
                                <p className="text-neutral-200 font-semibold text-lg">
                                    {log.name} joined the server
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
