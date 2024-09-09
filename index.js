import express from 'express';
import pg from 'pg';

const app = express();
app.use(express.json());

const pool = new pg.Pool({
    connectionString : process.env.POSTGRES_URL,
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
});

app.get("/",async(req, res)=>{
    try {
        await pool.connect();
    } catch (error) {
        
    }
    res.json({
        "msg": "Hello from express",
    })
});

app.post("/", async(req, res) => {
    let client ;
    try {
        client = await pool.connect();
        var resutl = client.query("CREATE TABLE user (name TEXT);");
        console.log(resutl);
        res.json({
            "msg": "Tbale created successfully"
        });
        
    } catch (error) {
       console.log(error);
        
    }
});

app.listen(3000, ()=>{
    console.log("Port listening on 3000");
})