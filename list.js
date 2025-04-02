import client from "./client.js";

async function main() {

    // Using redis as queue
    // Inserting
    await client.lpush("msg" , "hi");
    await client.lpush("msg" , "hello");
    await client.lpush("msg" , "namaste");
    await client.lpush("msg" , "bye");

    // Poping
    console.log(await client.rpop("msg"));
    console.log(await client.rpop("msg"));
    console.log(await client.rpop("msg"));



    // Using redis as stack
    // Inserting
    await client.lpush("msg" , "hi");
    await client.lpush("msg" , "hello");
    await client.lpush("msg" , "namaste");
    await client.lpush("msg" , "bye");

    // Poping
    console.log(await client.lpop("msg"));
    console.log(await client.lpop("msg"));
    console.log(await client.lpop("msg"));

    // Blocking Pop - if the redis is empty, it wait for the element to insert and then pops it.

    console.log(await client.blpop("text" , 10))
    await new Promise(r => setTimeout(r,100));
    await insert();
    console.log(await client.blpop("text" , 10))
}

async function insert() {
    await client.lpush("text" , "removed just after inserting");
}

async function displayAllList(params) {
    await client.lpush("txt" , "Hello")
    await client.lpush("txt" , "Hi")
    await client.lpush("txt" , "Bye")

    console.log(await client.lrange("txt" , 0 , 2));
}
// displayAllList();  
// main()