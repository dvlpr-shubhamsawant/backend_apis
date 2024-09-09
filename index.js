import express from 'express';
import pg from 'pg';

const app = express();
app.use(express.json());



app.get("/",async(req, res)=>{
    try {
        await pool.connect();
    } catch (error) {
        
    }
    res.json({
        "msg": "Hello from express",
    })
});



app.listen(3000, ()=>{
    console.log("Port listening on 3000");
})