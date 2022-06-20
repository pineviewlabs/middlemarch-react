const path = require('path');
const vite = require('vite');

const startViteForReact = async function() {
    const server = await vite.createServer({
        configFile: path.resolve('vite.config.js')
    })

    server.printUrls();

    return server.listen();
}

let viteServer;
module.exports = {
    async before() {
        viteServer = await startViteForReact();

        const port = viteServer.config.server.port;

        this.launchUrl = `http://localhost:${port}`;
    },

    async after() {
        await viteServer.close();
    }
}