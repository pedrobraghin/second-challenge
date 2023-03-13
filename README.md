# Challenge #02 - Description

Second Challenge of the Compass UOL Scholarship Program: Back-end Journey (Node.js) - AWS Cloud Context - 01/16/2023

The first challenge consisted of creating an API that will be used for a Planner application, built for a hypothetical Compass UOL client. This Planner will help the client to organize his week and his tasks.

The challenge this time will be to make your code from the previous challenge even better by adding some new features.

# Summary

- [**Group Participants**](#group-participants)
- [**Fulfilled Requirements**](#fulfilled-requirements)
- [**Links**](#links)
- [**How to Run Locally**](#how-to-run-locally)
- [**How to Use**](#how-to-use)
- [**Comments**](#comments)

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

# Links

[Swagger](https://firstchallenge-compasspb-production.up.railway.app/api-docs)

[Deploy](https://firstchallenge-compasspb-production.up.railway.app/api/v1)

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

5. Build the application:

```
npm run build
```

6. Start the application on production mode:

```
npm start
```

PS.: For the automated tests, run:

```
npm test
```

# How to Use

The application has a MongoDB database, with a collection for Users and another one for Events.

Once running, the application awaits for HTTP requests.

Documentation of how each request should look like is available via Swagger (view [links](#links)).

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
