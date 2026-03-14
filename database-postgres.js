import { randomUUID } from 'node:crypto'
import sql from './db.js';


export class DatabasePostgres {
   

    //set e map utilizado para criar um conjunto de dados, ou seja, para criar um conjunto de dados sem duplicidades

   async list(search) {
        let videos

        if(search){
        videos = await sql`select * from video where title like "${'%' + search + '%'}"`
        }else{
            videos = await sql`select * from video`
        }
        return videos

    }

    async create(video) {
        const videoId = randomUUID()
        await sql`insert into video (title, description, url) values (${video.title}, ${video.description}, ${video.url})`
    }

    async update(id, video) {
        await sql`update video set title = ${video.title}, description = ${video.description}, url = ${video.url} where id = ${id}`
    }

    async delete(id) {
        await sql`delete from video where id = ${id}`
    }

}