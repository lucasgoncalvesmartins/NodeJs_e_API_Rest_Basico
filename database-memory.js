import { randomUUID } from 'node:crypto'

export class databaseMemory {
    #videos = new Map()

    //set e map utilizado para criar um conjunto de dados, ou seja, para criar um conjunto de dados sem duplicidade

    list() {
        return this.#videos.values()
    }

    create(video) {
        const videoId = randomUUID()
        this.#videos.set(videoId, video)
    }

    update(id, video) {
        this.#videos.set(id, video)
    }

    delete(id) {
        this.#videos.delete(id)
    }

}