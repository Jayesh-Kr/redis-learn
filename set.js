import client from "./client.js";

async function main() {
    // Set - To store unordered, unique values
    await client.sadd("ip" , 1);
    await client.sadd("ip" , 2);
    await client.sadd("ip" , 3);
    await client.sadd("ip" , 4);

    await client.srem("ip" , 2);
    console.log(await client.sismember("ip" , 1));
}

main();

console.log(eval("2+2"))