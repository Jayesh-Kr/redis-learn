import client from "./client.js";

async function init() {
    const result = await client.get("name");
    // await client.set("msg:1" , "Hello from nodejs");
    // await client.expire("msg:1" , 2);
    const res = await client.get("msg:1");
    console.log(result);
    console.log(res);
}
init();