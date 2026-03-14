import {fastify}  from 'fastify'
import {databaseMemory} from './database-memory.js'


const server = fastify()
const db = new databaseMemory()

//post utilizado para enviar informações para o servidor, ou seja, para criar informações no servidor
//resquest body toda vez que utilizo post e puth posso enviar um corpo para requisição
server.post('/videos',(request, reply) => {
  const {title, description, url} = request.body

    db.create({
        title,
        description,
        url
    })

    console.log(db.list())

    return reply.status(201).send()

    //201 significa que algo foi criado com sucesso, ou seja, que a informação foi criada com sucesso no servidor

  })

//get utilizado para pegar informações do servidor, ou seja, para ler informações do servidor
server.get('/videos',(request) => {
    const search = request.query.source

    console.log(search)
    
    const videos = db.list(search)


    return videos
})

//put utilizado para atualizar informações no servidor, ou seja, para atualizar informações no servidor
//rout parameters parametro enviado na rota, ou seja, parametro enviado na url
server.put('/videos/:id',(request, reply) => {
    const  videoId = request.params.id
    const {title, description, url} = request.body

    
    const video = db.update(videoId, {
        title,
        description,
        url,
    })

    return reply.status(204).send()

     //204 significa que algo foi atualizado com sucesso, porem sem retornar nenhum conteúdo 

})

//delete utilizado para deletar informações no servidor, ou seja, para deletar informações no servidor
server.delete('/videos/:id',(request, reply) => {
    const videoId = request.params.id
    db.delete(videoId)
     return reply.status(204).send()
})


server.listen({
    port: 3333,
})


//patch utilizado para atualizar informações especificas no servidor