# Challenge #02 - Description

Second Challenge of the Compass UOL Scholarship Program: Back-end Journey (Node.js) - AWS Cloud Context - 01/16/2023

The challenge this time will be to make your code from the previous challenge even better by adding some new features. The novelty is that they will develop as a group.

# Group Participants

- Pedro Braghin
- Fernanda
- Pedro Luiz da Costa Silva

# Fulfilled Requirements

## Mandatory

- [x] Readability;
- [x] Private Repository;
- [x] Small commits;
- [x] Commit pattern;
- [x] Express;
- [x] Input Validation;
- [x] Readme.md;
- [x] Unit Testing;
- [x] Use swagger to document the API;
- [x] Explanation of how to run locally;
- [x] JWT Authentication;
- [x] Detailed Documentation;
- [x] Deploy: [Link](https://firstchallenge-compasspb-production.up.railway.app/api/v1);
- [x] Share the repository link with us by email;
- [x] Create a new repository.

## Optional

- [ ] Docker;
- [x] eslint/Prettier;

# How to Run Locally

1. Certify that Node v18.13.0 or any posterior Major 18 version is installed;
2. Clone the repository:

```
git clone https://github.com/pedrobraghin/second-challenge
```

2. Change to project directory:

```
cd second-challenge
```

3. Install necessary dependencies:

```
npm install
```

4. Substitute .env for the provided file;

5. Build and run the application:

```
npm start
```

PS.: For the automated tests, run:

```
npm test
```

# How to Use

The application has a MongoDB database, with a collection for Users and another one for Events.

Once running, the application awaits for HTTP requests. It supports the following operations:

- **Get all events**: Retorna array com todos os eventos;
- **Get event by ID**: Retorna evento com ID especificado;
- **Get events by Weekday**: Retorna array com todos os eventos com o dia da semana especificado;
- **Create event**: Cria um novo evento;
- **User SignUp**: Cria um novo usuário;
- **User SignIn**: Faz autenticação de um usário existente;
- **Delete event by ID**: Deleta um evento com ID especificado;
- **Delete event by Weekday**: Deleta todos os eventos com o dia da semana especificado.

The documentation on how each method works is available via Swagger.
