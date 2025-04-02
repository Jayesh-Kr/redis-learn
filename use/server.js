import express from 'express';
import axios from 'axios';
import client from '../client.js';

const app = express();


app.get('/' , async(req,res)=> {

    const cachedValue = await client.get("todos");
    if(cachedValue)
        return res.status(200).json(JSON.parse(cachedValue));

    const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos");
    
    await client.set("todos" , JSON.stringify(data))
    await client.expire("todos" , 30);
    return res.json(data);

})

app.listen(3000, () => {
    console.log("Server running on port 3000")
});