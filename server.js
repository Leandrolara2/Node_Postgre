import {fastify} from 'fastify'
// import { DatabaseMemory} from './database-memory.js'
import { DatabasePostgres } from './database-postgres.js' 


const server = fastify()

// const database = new DatabaseMemory()

const database = new DatabasePostgres();
server.post('/videos', async (request, reply) => {
    const { title, description, duration } = request.body

    await database.create({
        title,
        description,
        duration,

    })
    // console.log(database.list())
    return reply.status(201).send()
})

server.get('/videos', async (request, reply) => {
    const { search } = request.query

    // console.log('Busca:', search)

    const videos = await database.list(search)

    return videos
})


server.put('/videos/:id', async (request, reply) => {
    const videoId = request.params.id;
    const { title, description, duration } = request.body;

    await database.update(videoId, {
        title,
        description,
        duration,
    });

    return reply.status(204).send()
})

server.delete('/videos/:id', async (request, reply) =>{
    const videoId = request.params.id

    await database.delete(videoId)

    return reply.status(204).send()

})

server.listen({
    // port:3333,
    port: process.env.post ?? 3333, 
})