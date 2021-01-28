require('ignore-styles');

require('@babel/register')({
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
});

require('asset-require-hook')({
    extensions: ['jpg','png', 'gif'],
    name: '/src/frontend/assets/[hash].[ext]',
});

require('./server');