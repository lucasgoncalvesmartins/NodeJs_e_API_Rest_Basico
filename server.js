import {fastify}  from 'fastify'
import {databaseMemory} from './database-memory.js'


const server = fastify()
const db = new databaseMemory()

//post utilizado para enviar informações para o servidor, ou seja, para criar informações no servidor
server.post('/videos',(request, reply) => {
    db.create({
        title: 'Video 1',
        description: 'descrição do video 1',
        url: 'https://www.youtube.com/watch?v=video1'
    })

    console.log(db.list())

    return reply.status(201).send()

    //201 significa que algo foi criado com sucesso, ou seja, que a informação foi criada com sucesso no servidor

  })

//get utilizado para pegar informações do servidor, ou seja, para ler informações do servidor
server.get('/videos',() => {
    return 'Hello World'
})

//put utilizado para atualizar informações no servidor, ou seja, para atualizar informações no servidor
//rout parameters parametro enviado na rota, ou seja, parametro enviado na url
server.put('/videos/:id',() => {
    return 'Hello World'
})

//delete utilizado para deletar informações no servidor, ou seja, para deletar informações no servidor
server.delete('/videos/:id',() => {
    return 'Hello World'
})


server.listen({
    port: 3333,
})


//patch utilizado para atualizar informações especificas no servidor