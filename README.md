# Instalando as dependências

1. Instalar o Node.js e o npm:
`sudo apt install nodejs npm`

2. Criar uma pasta para o projeto:
`mkdir classroom-backend` `cd classroom-backend`

3. Inicializar o projeto respondendo tudo com sim:
`npm init -y`

4. Instalar o express:
`npm i express`

5. Instalar o Prisma:
`npm install prisma --save-dev`

6. Instalar o Cliente Prisma:
`npm install @prisma/client`

7. Iniciar o Prisma:
`npx prisma init`

8. Instalar o MongoDB:
`npm install mongodb`

8. No arquivo ".env" que for gerado, coloque a URL do banco de dados:
`DATABASE_URL="mongodb+srv://USUÁRIO:SENHA_DO_BANCO@class.suw3x.mongodb.net/NOME_DO_BANCO?retryWrites=true&w=majority&appName=Class"`

## Se alterar os esquemas do banco...

Execute para sincronizar os esquemas do prisma para o banco de dados:
`npx prisma db push`

Execute para importar o cliente Prisma:
`npx prisma generate`

## Rodar o banco de dados
Executar o servidor: `node server.js`

Interface para o banco de dados: `npx prisma studio`

URL: `http://localhost:3000/turmas`

## Exemplo de json para POST
`{
  "title": "Processamento paralelo",
  "subtitle": "2024",
  "teacher": "Leonardo",
  "pfp": "https://cdn.pixabay.com/photo/2023/10/24/05/08/dog-8337394_960_720.jpg",
  "bg": "https://cdn.pixabay.com/photo/2023/12/23/08/42/island-8465139_960_720.png"
}`
