import { NextResponse } from "next/server";
import { Rcon } from "rcon-client";

export async function GET(req: Request) {
    const rcon = await Rcon.connect({
        host: "localhost",
        port: 25575,
        password: "1234",
    });

    const output = await rcon.send("mspt");
    // the output looks like this:
    // §6Server tick times §e(§7avg§e/§7min§e/§7max§e)§6 from last 5s§7,§6 10s§7,§6 1m§e:\n§6◴ §a3.2§7/§a2.2§7/§a5.5§e, §a3.2§7/§a2.2§7/§a6.0§e, §a3.4§7/§a2.2§7/§a8.4\n
    // we need to parse it to get the number of ticks per minute in avg
    const avgTicksPerMinute = parseFloat(
        output.split("1m")[1].split("/")[0].split("§a")[1]
    );

    // get players online
    const playersOnline = await rcon.send("list");
    const playersOnlineCount = parseInt(playersOnline.split(" ")[2]);

    rcon.end();

    return NextResponse.json({
        status: 200,
        avgTicksPerMinute,
        playersOnlineCount,
    });
}
