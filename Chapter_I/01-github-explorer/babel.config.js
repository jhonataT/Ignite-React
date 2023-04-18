// yarn babel src/index.js --out-file dist/bundle.js

module.exports = {
    presets: [
        '@babel/preset-env',
        ['@babel/preset-react', {
            runtime: 'automatic'
        }]
    ]
};