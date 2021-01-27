import express from 'express';
import dotenv from "dotenv";

dotenv.config();
const { ENV, PORT} = process.env;

const app = express();

if(ENV === 'development'){
    console.log('Development Server');
}

app.get('*', ( req, res)=>{
    res.send({message: 'express'});
});

app.listen(PORT, (err) => {
    if(err){
        console.error(err);
    }
    console.log('Listen on http://localhost:3000');
});