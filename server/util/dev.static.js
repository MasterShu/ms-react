const axios = require('axios')
const webpack = require('webpack')
const memoryFs = require('memory-fs')
const ReactDOMServer = require('react-dom/server')
const path = require('path')
const proxy = require('http-proxy-middleware')

const serverConfig = require('../../build/server.webpack.config') 

const baseUrl = 'http://127.0.0.1:8089'
const url = 'http://127.0.0.1:8089/public/index.html'

const getTemplate = () => {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(res => {
                resolve(res.data)
            })
            .catch(reject)
    })
}

const Module = module.constructor

const serverCompiler = webpack(serverConfig)
const mfs = new memoryFs
serverCompiler.outputFileSystem = mfs
let serverBundle

serverCompiler.watch({}, (err, stats) => {
    if (err) {
        throw err
    }
    stats = stats.toJson()
    stats.errors.forEach(e => {
        console.log(err)
    });
    stats.warnings.forEach(e => {
        console.log(err)
    });

    const bundlePath = path.join(
        serverConfig.output.path,
        serverConfig.output.filename
    )
    const bundle = mfs.readFileSync(bundlePath, 'utf-8')
    const m = new Module()
    m._compile(bundle, 'server-enrty.js')
    serverBundle = m.default
})

module.exports = function (app) {
    app.use('/public', proxy({
        target: baseUrl

    }))
    app.get('*', (req, res) => {
       getTemplate().then(t => {
           const content = ReactDOMServer.renderToString(serverBundle)
           res.send(t.replace('<!-- app -->', content))
       }) 
    });
}