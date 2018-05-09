const bs = require('browser-sync')

const DEV_SERVER_PORT = 3000

bs.create().init({
    server: {
        baseDir: './build',
        index: 'index.html',
    },
    port: DEV_SERVER_PORT,
    serveStatic: ['.', './build'],
    https: true,
    logPrefix: 'Daily calls ToDo app',
    logConnections: true,
    scrollProportionally: false,
});
