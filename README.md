
![Descrição da imagem](https://i.imgur.com/4hY4ARY.jpg)


# Api Autenticação com Repository Pattern

Este projeto implementa um sistema de autenticação utilizando o **Repository Pattern** em conjunto com **TypeScript**, **Node.js**, **Express**, e o banco de dados **MongoDB**. O objetivo principal é fornecer uma arquitetura limpa, modular e escalável.

---
# Tecnologias usadas

![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/-Mongoose-880000?logo=mongoose&logoColor=white)
![JWT](https://img.shields.io/badge/-JWT-000000?logo=json-web-tokens&logoColor=white)
![Bcrypt](https://img.shields.io/badge/-Bcrypt-E5E500?logo=bcrypt&logoColor=white)


## O que é o Repository Pattern?

O Repository Pattern é um padrão de design que atua como uma ponte entre a aplicação e a camada de dados. Ele encapsula a lógica de acesso a dados, oferecendo uma interface específica para interagir com o banco de dados. Isso facilita a manutenção, os testes e a substituição da tecnologia de armazenamento sem alterar outras partes do código.

### Vantagens do Repository Pattern
- **Desacoplamento**: Isola a lógica de acesso a dados da lógica de negócios.
- **Testabilidade**: Facilita a criação de testes unitários, pois podemos usar mocks ou stubs.
- **Flexibilidade**: Torna mais simples a substituição de tecnologias de banco de dados.

---

## Estrutura do Projeto

O projeto segue a seguinte organização de pastas:

```
/src
  /controllers
  /models
  /repositories
  /routes
  /services
  /utils
```

### Diretórios Principais

- **controllers/**: Contém os controladores responsáveis por lidar com as requisições HTTP.
- **models/**: Define os esquemas de dados usados pela aplicação.
- **repositories/**: Implementa o Repository Pattern, incluindo a interface e a classe concreta de repositório.
- **services/**: Lógica de negócios centralizada, responsável por coordenar operações entre os controladores e repositórios.
- **utils/**: Contém funções auxiliares como hashing e geração/verificação de JWTs.

---

## Tecnologias Utilizadas

- **TypeScript**
- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**
- **JWT**
- **Bcrypt**

---

## Como Executar o Projeto

### Pré-requisitos
- Node.js (v18 ou superior)
- MongoDB
- Gerenciador de pacotes (npm ou yarn)

### Passos
1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/seurepositorio.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure as variáveis de ambiente no arquivo `.env`:
   ```env
   MONGODB_URL=sua_url_mongodb
   PORT=3000
   JWT_SECRET=sua_chave_secreta
   ```
4. Inicie o servidor em modo de desenvolvimento:
   ```bash
   npm run start:dev
   ```

O servidor estará disponível em `http://localhost:3000`.

---

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais detalhes.
