import express from 'express';
import dotenv from "dotenv";
import webpack from "webpack";

dotenv.config();
const { ENV, PORT} = process.env;

const app = express();

if(ENV === 'development'){
    console.log('Development Server');
    const webpackConfig = require('../../webpack.config');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const compiler = webpack(webpackConfig);
    const serverConfig = {serverSideRender:true};

    app.use(webpackDevMiddleware(compiler, serverConfig));
    app.use(webpackHotMiddleware(compiler));
}

app.get('*', ( req, res)=>{
    res.send(`
    <!DOCTYPE html>
        <html>
            <head>
                <link rel="stylesheet" href="assets/app.css" type="text/css">
                <title>Platzi Video</title>
            </head>
            <body>
                <div id="app"></div>
                <script src="assets/app.js" type="text/javascript"></script>
            </body>
        </html>
    `);
});

app.listen(PORT, (err) => {
    if(err){
        console.error(err);
    }
    console.log('Listen on http://localhost:3000');
});