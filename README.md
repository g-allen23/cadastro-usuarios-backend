# Cadastro de Usuários

API REST desenvolvida com Node.js, Express e Prisma ORM para gerenciar usuários, com persistência de dados no MongoDB Atlas.

O backend fornece os endpoints utilizados pela aplicação frontend para cadastrar, listar e excluir usuários. A estrutura também contempla uma rota para atualização de usuários.

## Tecnologias utilizadas

- **Node.js** - ambiente de execução JavaScript.
- **Express** - criação e gerenciamento das rotas HTTP.
- **Prisma ORM** - comunicação com o banco de dados.
- **MongoDB Atlas** - banco de dados NoSQL em nuvem.
- **Axios** - utilizado no frontend para consumir a API.
- **CORS** - configuração de acesso entre origens.
- **dotenv** - carregamento de variáveis de ambiente.

## Funcionalidades

- Cadastro de usuários.
- Listagem de usuários cadastrados.
- Exclusão de usuários pelo identificador.
- Endpoint para atualização de usuários.

Cada usuário possui os seguintes campos:

| Campo     | Tipo   | Descrição
|-----------|--------|----------------------------------------------------------------
| `id`      | String | Identificador único do usuário, baseado no ObjectId do MongoDB.
| `name`    | String | Nome do usuário.
| `email`   | String | E-mail único do usuário.
| `age`     | Int    | Idade do usuário.

## Estrutura do projeto

```text
backend/
├── prisma/
│   └── schema.prisma
├── server.js
├── package.json
├── package-lock.json
└── .env
```

A estrutura acima representa os arquivos principais conhecidos do projeto. Outros arquivos podem existir no repositório.

## Pré-requisitos

Antes de executar a aplicação localmente, tenha instalado:

- Node.js.
- npm.
- Uma conta e um banco de dados configurados no MongoDB Atlas.

## Instalação

Clone o repositório e acesse a pasta do backend:

```bash
git clone URL_DO_REPOSITORIO
cd NOME_DA_PASTA
```

Instale as dependências:

```bash
npm install
```

Configure as variáveis de ambiente conforme a seção seguinte.

## Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto e configure a variável `DATABASE_URL` com a string de conexão do MongoDB Atlas:

```env
DATABASE_URL="SUA_STRING_DE_CONEXAO_DO_MONGODB"
```

Substitua o valor de exemplo pela string de conexão real do banco.

**Importante:** não publique o arquivo `.env` no GitHub. Mantenha as credenciais privadas e utilize variáveis de ambiente na hospedagem.

## Executando localmente

Para iniciar o servidor em modo de desenvolvimento:

```bash
npm run dev
```

Para iniciar o servidor utilizando o script de produção:

```bash
npm start
```

O script de inicialização executa o arquivo `server.js`.

A porta local e o endereço base da API dependem da configuração definida no servidor.

## Endpoints da API

A URL base de produção é:

```text
https://cadastro-usuarios-backend-dm8t.onrender.com
```

### 1. Cadastrar usuário

**Método:** `POST`

**Rota:** `/usuarios`

Exemplo de corpo da requisição:

```json
{
  "name": "Maria Silva",
  "email": "maria@example.com",
  "age": 25
}
```

Cadastra um novo usuário no banco de dados. O e-mail deve ser único.

### 2. Listar usuários

**Método:** `GET`

**Rota:** `/usuarios`

Retorna os usuários cadastrados no banco de dados.

### 3. Atualizar usuário

**Método:** `PUT`

**Rota:** `/usuarios/:id`

O identificador do usuário deve ser informado no parâmetro `id`.

> A rota está prevista na API, mas a funcionalidade de edição ainda não está disponível na interface frontend.

### 4. Excluir usuário

**Método:** `DELETE`

**Rota:** `/usuarios/:id`

Exclui o usuário correspondente ao identificador informado.

## Banco de dados

O projeto utiliza MongoDB Atlas com Prisma ORM.

O modelo `users` possui um identificador baseado em ObjectId, além dos campos `name`, `email` e `age`. O campo `email` possui restrição de unicidade.

A conexão é configurada pela variável de ambiente `DATABASE_URL`.

## Deploy

O backend está hospedado no **Render**, enquanto o frontend está publicado na **Vercel** e utiliza a URL de produção da API.

Para configurar o serviço no Render:

- Conecte o repositório do backend.
- Configure o ambiente Node.js.
- Utilize o comando de build:

```bash
npm install && npx prisma generate
```

- Utilize o comando de inicialização:

```bash
npm start
```

- Configure a variável de ambiente `DATABASE_URL`.
- Configure no MongoDB Atlas os intervalos de IP de saída necessários para o serviço.

Não mantenha a regra `0.0.0.0/0` ativa permanentemente, pois ela permite tentativas de conexão a partir de qualquer endereço IP.

## Aprendizados

Este projeto permitiu praticar:

- Desenvolvimento de uma API REST.
- Criação e organização de rotas HTTP.
- Integração entre Node.js, Express e Prisma.
- Persistência de dados com MongoDB Atlas.
- Configuração de variáveis de ambiente.
- Deploy de backend em nuvem.
- Integração entre frontend, backend e banco de dados.

## Status do projeto

O backend está publicado e integrado ao frontend.

As operações de cadastro, listagem e exclusão foram testadas com sucesso. A funcionalidade de edição permanece como uma melhoria futura.

## Autor

**Geovane Allen**

Desenvolvedor Front-End em evolução para Full Stack.
