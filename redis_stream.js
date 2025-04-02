import client from './client.js';
let a = 1;
async function main() {
    const timestamp = await client.xadd("temp-data", "*", "value", Math.random() * 10, "message", "Hello", "count", 2)
    console.log(timestamp);
    
    for(let a = 1; a < 10000; a++) {
        const timestamp = await client.xadd("temp-data", "*", "value", Math.random() * 10, "message", "Hello", "count", 2)
        console.log(timestamp);
        a++;
        console.log(`data inserted : ${a}`);
    }

}

Promise.all(
    [
        main(),
        main(),
        main()
    ]
).then(()=>console.log("done"));