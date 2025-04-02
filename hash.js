import client from './client.js';

async function main() {
    await client.hset("bike" , {
        model : "Model 1",
        brand : "Jian",
        price : 600000
    })

    console.log(await client.hget("bike" , "model"));

    console.log(await client.hmget("bike" , ["model" , "price"]));
}

main();