import express from 'express';

const app = express();

app.get('*', ( req, res)=>{
    res.send({message: 'express'});
});

app.listen(3000, (err) => {
    if(err){
        console.error(err);
    }
    console.log('Listen on http://localhost:3000');
});