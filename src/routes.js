const {addBoookHandler} = require('./handler')

const routes = [
    {
        method: 'POST',
        path : '/books',
        handler : addBoookHandler,
    },
    {
        method: 'GET',
        path : '/books',
        handler: () => {}
    }
]

module.exports = routes;