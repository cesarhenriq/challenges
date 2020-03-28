# iHeros Challenges

Projeto desenvolvido com Node.js e banco de dados MongoDB

## Intruções de uso

1. Versão utilizada do Node v12.4.0
2. Versão utilizado do NPM v6.13.7
3. URL de conexão mongo mongodb://localhost:27017/zrp
4. Instalar todas as dependências executando o comando npm i na raiz do projeto pelo terminal/cmd
5. Apos instalar todas as dependências e preciso iniciar o servidor, através do terminal digite o comando na raiz do projeto npm run dev, para iniciar o servidor em modo de desenvolvimento, o servidor iniciara na porta 3000
6. Para gerar o buid da aplicação, no terminal execute o seguinte comando: npm run build e na raiz da aplicação será cria a pasta dist, para iniciar o servidor através da dist que foi gerada, execute o seguinte comando: npm start

### Iniciar as ocorrências

No terminal/cmd na raiz do projeto executar o seguinte comando
npm run io

### Popular a base de dados com heróis

No terminal/cmd na raiz do projeto executar o seguinte comando
npm run seeds-heroes
com esse comando será criar um varios heróis no banco

### Rota para registro de um novo usuários

URI /registe
Método POST
Body Requisição

```javascript
{
"name": "José da Silva",
"email": "josedasilva@gmail.com",
"password": "123456"
}
```

Resposta com status code 201

```javascript
{
  "data": {
    "_id": "5e7d74d12ad850759e361ef6",
    "name": "José da Silva",
    "email": "josedasilva@gmail.com",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlN2Q3NGQxMmFkODUwNzU5ZTM2MWVmNiIsImVtYWlsIjoiY2VzYXIuaGVucmlxdWUxMjFAZ21haWwuY29tIiwiaWF0IjoxNTg1MjgwMjA5LCJleHAiOjE1ODUzNjY2MDl9.yzIZRw0YWsiPHu7B6_oxeTtg0POslVnDyH3ZMrrQZs4"
}
```

### Rota de Logon

URI /logon
Método POST
Body requisição

```javascript
{
"email": "josé@silva.com",
"password": "123456"
}

Resposta com status code 200
{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNGY3MTg3Y2M4ZjRlMDQ5MjgzNTk5YSIsImVtYWlsIjoiam9zw6lAc29sdmEuY29tIiwiaWF0IjoxNTgyMjY1Njk5LCJleHAiOjE1ODIzNTIwOTl9.yxevIydFUGZy-f5fjRtuF9OJ4WVUilitaNJAUZtY73Q"
}
```

OBS: Todas as URI com api/v1/ são rotas que precisão de autenticação
No header deve ter o Authorization: Bearer <token>

### Rota para retorna profile

URI api/v1/profile
Método GET
Body requisição: Sem body

Resposta com status code 200

```javascript
{
  "_id": "5e7e9f92014d23422dd0d4b7",
  "name": "José da Silva",
  "email": "josedasilva@gmail.com",
  "__v": 0
}
}
```

### Rota para alterar Profile

URI api/v1/profile
Método PUT
Body requisição

```javascript
{
	"name": "José da Silva",
	"email": "josedasilva@gmail.com",
	"password": "123456"
}

```

Resposta com status code 200

```javascript
{
  "data": {
    "name": "José da Silva",
    "email": "josedasilva@gmail.com",
    "password": "123456"
  }
}
```

### Rota para deletar Profile

URI api/v1/profile
Método DELETE
Body requisição: sem body

Resposta com status code 204

### Rota para listar Heróis

URI api/v1/heroes
Filtros: ?page=1
Método GET
Body requisição: sem body

Resposta com status code 200

```javascript
{
  "docs": [
    {
      "_id": "5e7e753fbb5a46200e752bcd",
      "name": "Homem de Ferro",
      "class": "S",
      "latitude": 22.35146,
      "longitude": -105.19274,
      "__v": 0
    },
  ],
  "totalDocs": 16,
  "limit": 20,
  "totalPages": 1,
  "page": 1,
  "pagingCounter": 1,
  "hasPrevPage": false,
  "hasNextPage": false,
  "prevPage": null,
  "nextPage": null
}
```

### Rota para exibir Herói

URI api/v1/heroes/id
Método GET
Body requisição: sem body

Resposta com status code 200

```javascript
{
  "data": {
    "_id": "5e7e753fbb5a46200e752bd9",
    "name": "Blade",
    "class": "S",
    "latitude": -11.74752,
    "longitude": 125.60038,
    "__v": 0
  }
}
```

### Rota para criar Herói

URI api/v1/heroes
Método POST
Body requisição

```javascript
{
	"name": "Supe Choque",
	"class": "S",
	"latitude": "-23.5506507",
	"longitude": "-46.6333824"
}
```

Resposta com status code 201

```javascript
{
  "_id": "5e7ea2fc014d23422dd0d4b9",
  "name": "Supe Choque",
  "class": "S",
  "latitude": -23.5506507,
  "longitude": -46.6333824,
  "__v": 0
}
```

### Rota para alterar Herói

URI api/v1/heroes/id
Método PUT
Body requisição

```javascript
{
	"name": "Supe Choque",
	"class": "S",
	"latitude": "-23.5506507",
	"longitude": "-46.6333824"
}
```

Resposta com status code 201

```javascript
{
  "_id": "5e7ea2fc014d23422dd0d4b9",
  "name": "Supe Choque",
  "class": "S",
  "latitude": -23.5506507,
  "longitude": -46.6333824,
  "__v": 0
}
```

### Rota para deletar Herói

URI api/v1/heroes/id
Método DELETE
Body requisição: sem body

Resposta com status code 204

### Rota para lista ocorrências

URI api/v1/occurrences
Método GET
Body requisição: sem body

Resposta com status code 200

```javascript
{
  "docs": [
    {
      "heroes": [
        "Lanterna Verde"
      ],
      "_id": "5e7e758deee0b7204d9e51c9",
      "monsterName": "The Raging Night Wolf",
      "dangerLevel": "Dragon",
      "latitude": -23.598920817843204,
      "longitude": -39.91346989490596,
      "__v": 0
    },
      ],
  "totalDocs": 280,
  "limit": 20,
  "totalPages": 14,
  "page": 1,
  "pagingCounter": 1,
  "hasPrevPage": false,
  "hasNextPage": true,
  "prevPage": null,
  "nextPage": 2
}
```

### Rota para exibir ocorrência

URI api/v1/occurrences
Método GET
Body requisição: sem body

Resposta com status code 200

```javascript
{
  "heroes": [
    "Lanterna Verde"
  ],
  "_id": "5e7e778beee0b7204d9e51da",
  "monsterName": "The Slender Rot Lion",
  "dangerLevel": "Dragon",
  "latitude": 52.41615893503513,
  "longitude": 13.179780318018432,
  "__v": 0
}
```
