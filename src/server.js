const Hapi = require ('@hapi/hapi')


const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host:'localhost'
    });

    server.route({
        method: 'GET',
        path:'/',
        handler:(Request, h) => {
            return ' Hello'
        }
    })

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`)
}



init();