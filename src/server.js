const Hapi = require ('@hapi/hapi')
const routes = require ('./routes')


const init = async () => {
    const server = Hapi.server({
        port: 9000,
        host:'localhost'
    });

    server.route({
        method: 'GET',
        path:'/',
        handler:(Request, h) => {
            return 'server successfully running'
        }
    })

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`)
}



init();