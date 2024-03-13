// 1. import json server

const jsonServer = require('json-server')

// 2. create a server application using jsonserver
const restServer = jsonServer.create()


// 3. setup path for db.json
const router = jsonServer.router('db.json')

// 4. return middleware
const middleware = jsonServer.defaults()


// 5. setup a port number
const port = 3001

// 6. use in restServer
restServer.use(middleware)
restServer.use(router)

// 7. to run the server
restServer.listen(port,()=>{
    console.log("restaurant server listening on port" + port);
})