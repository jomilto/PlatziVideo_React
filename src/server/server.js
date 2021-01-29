import express from 'express';
import dotenv from "dotenv";
import webpack from "webpack";
import helmet from "helmet";
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router-dom';
import reducer from '../frontend/reducers';
import { renderRoutes } from "react-router-config";

import serverRoutes from "../frontend/routes/serverRoutes";
import initialState from '../frontend/initialState';

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
}else{
    app.use(express.static(`${__dirname}/public`));
    app.use(helmet());
    // Para evitar la incrustación de alto consumo de ancho de banda
    app.use(helmet.permittedCrossDomainPolicies());
    // para evitar ataques directos a ciertos frameworks o lenjuages
    app.disable('x-powered-by');
}

const setResponse = (html, preloadedState) => {
    return (`
    <!DOCTYPE html>
        <html>
            <head>
                <link rel="stylesheet" href="assets/app.css" type="text/css">
                <title>Platzi Video</title>
            </head>
            <body>
                <div id="app">${html}</div>
                <script>
                    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g,'\\u003c')}
                </script>
                <script src="assets/app.js" type="text/javascript"></script>
            </body>
        </html>
    `);
}

const renderApp = (req, res) => {
    const store = createStore(reducer, initialState);
    const preloadedState = store.getState();
    const html = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={{}}>
                {renderRoutes(serverRoutes)}
            </StaticRouter>
        </Provider>
    );
    res.send(setResponse(html,preloadedState));
};

app.get('*', renderApp);

app.listen(PORT, (err) => {
    if(err){
        console.error(err);
    }
    console.log('Listen on http://localhost:3000');
});