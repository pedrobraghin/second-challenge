# Challenge #02 - Description

Second Challenge of the Compass UOL Scholarship Program: Back-end Journey (Node.js) - AWS Cloud Context - 01/16/2023

The first challenge consisted of creating an API that will be used for a Planner application, built for a hypothetical Compass UOL client. This Planner will help the client to organize his week and his tasks.

The challenge this time will be to make your code from the previous challenge even better by adding some new features.

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

## GET Operations

- **Get All Events**: _Must be authenticated_. Returns all events of the currently logged in user.
- **Get Event by ID**: _Must be authenticated_. Returns the event of the specified ID if it's associated to the currently logged in user.
- **Get Events by Weekday**: _Must be authenticated_. Returns all events for the specified day of the week of the currently logged in user.
- **Get Me**: _Must be authenticated_. Returns all user data of the currently logged in user.

## POST Operations

- **Create Event**: _Must be authenticated_. Creates an event using data from the request body.
- **Sign Up**: Create and login an user.
- **Sign In**: Logs in an existing user.

## PATCH Operations

- **Update User**: _Must be authenticated_. Updates user data of the currently logged in user.

## DELETE Operations

- **Delete Event By ID**: _Must be authenticated_. Deletes the event of the specified ID if it's associated to the currently logged in user.
- **Delete Event By Weekday**: _Must be authenticated_. Deletes all events for the specified day of the week of the currently logged in user.
- **Delete Me**: _Must be authenticated_. Deletes the currently logged in user.

Documentation of how each method works is available via Swagger.
