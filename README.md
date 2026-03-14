# Projeto com Node.js

Este é um projeto simples de API desenvolvido com **Node.js** utilizando o framework **Fastify**.
O objetivo do projeto é estudar e praticar a criação de APIs REST, implementando operações básicas de CRUD.

## Status do Projeto

Projeto em desenvolvimento.

Atualmente a API utiliza um **banco de dados em memória (Map)** apenas para fins de aprendizado e testes.

## Tecnologias utilizadas

* Node.js
* Fastify
* JavaScript (ES Modules)

## Funcionalidades já implementadas

A API atualmente possui as seguintes rotas:

| Método | Rota          | Descrição             |
| ------ | ------------- | --------------------- |
| POST   | `/videos`     | Cria um novo vídeo    |
| GET    | `/videos`     | Lista todos os vídeos |
| PUT    | `/videos/:id` | Atualiza um vídeo     |
| DELETE | `/videos/:id` | Remove um vídeo       |

Os dados são armazenados temporariamente em memória utilizando **Map**, portanto são perdidos ao reiniciar o servidor.

## Como executar o projeto

1. Clone o repositório

```
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Entre na pasta do projeto

```
cd Projeto_com_NodeJs
```

3. Instale as dependências

```
npm install
```

4. Execute o servidor

```
npm start
```

O servidor será iniciado em:

```
http://localhost:3333
```

## Exemplos de requisição

Criar vídeo:

```
POST /videos
Content-Type: application/json

{
  "title": "Video de teste",
  "description": "Descrição do vídeo",
  "url": "https://youtube.com/..."
}
```

## Objetivo do projeto

Este projeto faz parte de um estudo prático para aprender:

* criação de APIs REST
* uso do Fastify
* manipulação de rotas HTTP
* estrutura básica de backend com Node.js

## Próximos passos

* implementar filtros na listagem de vídeos
* validação de dados
* integração com banco de dados real
* melhorar organização do código
