# Challenge #02 - Description

Second Challenge of the Compass UOL Scholarship Program: Back-end Journey (Node.js) - AWS Cloud Context - 01/16/2023

The first challenge consisted of creating an API that will be used for a Planner application, built for a hypothetical Compass UOL client. This Planner will help the client to organize his week and his tasks.

The challenge this time will be to make your code from the previous challenge even better by adding some new features.

# Summary

- [**Group Participants**](#group-participants)
- [**Fulfilled Requirements**](#fulfilled-requirements)
- [**Deploy and Swagger**](#deploy-and-swagger)
- [**How to Run Locally**](#how-to-run-locally)
- [**How to Use**](#how-to-use)
- [**Comments**](#comments)

# Group Participants

- Pedro Braghin da Silva
- Fernanda de Paula Pessoa
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
- [x] Unit Testing (done on JEST);
- [x] Use swagger to document the API;
- [x] Explanation of how to run locally;
- [x] JWT Authentication;
- [x] Detailed Documentation;
- [x] Deploy;
- [x] Share the repository link with us by email;
- [x] Create a new repository.

## Optional

- [ ] Docker;
- [x] eslint/Prettier;

# Deploy and Swagger

- **Deploy Base URL**: https://second-challenge-production.up.railway.app/api/v1
- **Swagger**: https://second-challenge-production.up.railway.app/api-docs/

For testing authenticated routes on Swagger, first locate and copy the Bearer token (on the Response Headers of either the SignUp or SignIn routes):

![Swagger1](https://i.ibb.co/fVW90rB/swagger1.png)

Then add the token on the Authorize option, on the top-right corner:

![Swagger2](https://i.ibb.co/QPpJf9Y/swagger2.png)

# How to Run Locally

1. Certify that Node v18.13.0 or any posterior Major 18 version is installed;

2. Have a MongoDB connection of your own (with a connection string and password);

3. Clone the repository:

```
git clone https://github.com/pedrobraghin/second-challenge
```

4. Change to project directory:

```
cd second-challenge
```

5. Install necessary dependencies:

```
npm install
```

6. Make a .env file following the contents of .env.example:

- NODE_ENV: Either development or production;
- PORT: The port to host the application;
- DATABASE: The connection string to the Mongo Database;
- DATABASE_PASSWORD: The password
- JWT_SECRET: For JWT authentication, can be any random string;
- JWT_EXPIRES_IN: The time in which a JWT expires;
- BCRYPT_SALT: For encryption, can be any number.

7. Build the application:

```
npm run build
```

8. Start the application:

```
npm start
```

9. For running the automated tests, use:

```
npm test
```

# How to Use

The application has a MongoDB database, with a collection for Users and another one for Events.

Once running, the application awaits for HTTP requests.

Documentation of how each request should look like is available via Swagger (view [Deploy and Swagger](#deploy-and-swagger)).

Requests are also implemented on the file `Second Challenge PB.postman_collection.json`, which can be opened using POSTMAN.

The available operations are briefly described below.

## GET Operations

- **Get All Events**: Returns all events of the currently logged in user. Must be authenticated.
- **Get Event by ID**: Returns the event of the specified ID if it's associated to the currently logged in user. Must be authenticated.
- **Get Events by Weekday**: Returns all events for the specified day of the week of the currently logged in user. Must be authenticated.
- **Get Me**: Returns all user data of the currently logged in user. Must be authenticated.

## POST Operations

- **Create Event**: Creates an event using data from the request body. Must be authenticated.
- **Sign Up**: Create and login an user.
- **Sign In**: Logs in an existing user.

## PATCH Operations

- **Update User**: Updates user data of the currently logged in user. Must be authenticated.

## DELETE Operations

- **Delete Event By ID**: Deletes the event of the specified ID if it's associated to the currently logged in user. Must be authenticated.
- **Delete Event By Weekday**: Deletes all events for the specified day of the week of the currently logged in user. Must be authenticated.
- **Delete Me**: Deletes the currently logged in user. Must be authenticated.

# Comments

- The file structure is based on the SOLID architecture.
