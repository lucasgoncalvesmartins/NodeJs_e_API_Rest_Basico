import {fastify}  from 'fastify'
import {DatabasePostgres} from './database-postgres.js'


const server = fastify()
const db = new DatabasePostgres()

//post utilizado para enviar informações para o servidor, ou seja, para criar informações no servidor
//resquest body toda vez que utilizo post e puth posso enviar um corpo para requisição
server.post('/videos', async(request, reply) => {
  const {title, description, url} = request.body

    await db.create({
        title,
        description,
        url
    })

    console.log(db.list())

    return reply.status(201).send()

    //201 significa que algo foi criado com sucesso, ou seja, que a informação foi criada com sucesso no servidor

  })

//get utilizado para pegar informações do servidor, ou seja, para ler informações do servidor
server.get('/videos', async(request) => {
    const search = request.query.source

    console.log(search)
    
    const videos = await db.list(search)


    return videos
})

//put utilizado para atualizar informações no servidor, ou seja, para atualizar informações no servidor
//rout parameters parametro enviado na rota, ou seja, parametro enviado na url
server.put('/videos/:id', async(request, reply) => {
    const  videoId = request.params.id
    const {title, description, url} = request.body

    
    const video = await db.update(videoId, {
        title,
        description,
        url,
    })

    return reply.status(204).send()

     //204 significa que algo foi atualizado com sucesso, porem sem retornar nenhum conteúdo 

})

//delete utilizado para deletar informações no servidor, ou seja, para deletar informações no servidor
server.delete('/videos/:id', async(request, reply) => {
    const videoId = request.params.id
    await db.delete(videoId)
     return reply.status(204).send()
})


server.listen({
    port: process.env.PORT ?? 3333,
})


//patch utilizado para atualizar informações especificas no servidor