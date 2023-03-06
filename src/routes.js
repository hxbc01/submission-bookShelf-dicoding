const {addBoookHandler} = require('./handler')

const routes = [
    {
        method: 'POST',
        path : '/books',
        handler : addBoookHandler,
    }
]

module.exports = routes;