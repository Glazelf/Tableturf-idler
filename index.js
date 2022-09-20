async function tableturfidler() {
    const config = require("./config.json");
    const net = require("net");
    const port = config.port;
    const host = config.ip; // change to switch's IP

    const conn = net.createConnection(port, host); // connect
    conn.setEncoding("utf-8"); // sends all commands as utf-8 (same as .encode())

    const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

    conn.write("detachController \r\n"); // detach from console
    console.log("Detached controller from console.");
    await sleep(5000);
    // Reconnect
    conn.write("click A \r\n");
    conn.write("click A \r\n");
    console.log("Connected controller to console.");

    while (true) {
        await sleep(5000);
        console.log("Choosing deck.");
        conn.write("click A \r\n");
        await sleep(10000);
        console.log("Holding steady.");
        conn.write("click A \r\n");
        await sleep(5000);
        console.log("Starting turn loop.");
        for (i = 0; i < 12; i++) {
            conn.write("click DDOWN \r\n");
            conn.write("click DDOWN \r\n");
            conn.write("click A \r\n");
            conn.write("click A \r\n");
            console.log(`Passed turn ${i + 1}.`);
            await sleep(10000);
        };
        console.log("Waiting for results...");
        await sleep(5000);
        console.log("Look at all that EXP!");
        conn.write("click A \r\n");
        await sleep(10000);
        console.log("Restarting battle!");
        conn.write("click A \r\n");
    };
};
tableturfidler();