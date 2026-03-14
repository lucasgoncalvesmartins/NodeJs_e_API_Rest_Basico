# Projeto com Node.js

Este é um projeto simples de API desenvolvido com **Node.js** utilizando o framework **Fastify**. O objetivo do projeto é estudar e praticar a criação de APIs REST, implementando operações básicas de CRUD e integração com banco de dados PostgreSQL via Neon.

## Deploy no Render

A API está configurada para rodar no **Render**. Para que o deploy funcione corretamente, as seguintes configurações são necessárias:

### 1. Variáveis de Ambiente
No painel do Render, adicione as seguintes variáveis em **Environment**:

| Chave | Descrição |
| :--- | :--- |
| `PORT` | Definida automaticamente pelo Render (o código usa `process.env.PORT ?? 3333`) |
| `DATABASE_URL` | URL de conexão do seu banco de dados Neon |

### 2. Configurações de Serviço
* **Build Command:** `npm install`
* **Start Command:** `node server.js`

## Rotas da API

Todas as rotas devem ser acessadas utilizando o prefixo `/videos`.

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| **POST** | `/videos` | Cria um novo vídeo |
| **GET** | `/videos` | Lista todos os vídeos (aceita query `?source=termo`) |
| **PUT** | `/videos/:id` | Atualiza um vídeo existente |
| **DELETE** | `/videos/:id` | Remove um vídeo por ID |

## Tecnologias utilizadas

* **Node.js**
* **Fastify**
* **PostgreSQL (Neon)**
* **JavaScript (ES Modules)**

## Como executar localmente

1. Clone o repositório e instale as dependências:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd Projeto_com_NodeJs
   npm install
   ```

2. Configure o arquivo `.env` com sua `DATABASE_URL`.

3. Execute o servidor:
   ```bash
   npm run dev # ou node server.js
   ```

## Observação Importante
Certifique-se de que suas requisições HTTP (via Insomnia, Postman ou `routes.http`) estão apontando para a URL correta:
* **Local:** `http://localhost:3333/videos`
* **Produção:** `https://sua-api.onrender.com/videos`

---
*Este projeto faz parte de um estudo prático de backend e APIs REST.*
