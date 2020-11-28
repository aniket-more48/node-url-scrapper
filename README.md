<h1 align="center">Next.js React GraphQL Express Apollo Boilerplate</h1>

<p align="center">Performance oriented NodeJS application boilerplate with Typescript, Express.js, GraphQL, Apollo, MongoDB and Redis
</p>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Installation](#installation)
  - [Step 1: Set up the Development Environment](#step-1-set-up-the-development-environment)
  - [Step 2: Set up Env](#step-2-set-up-env)
  - [Step 3: Install dependencies](#step-3-install-dependencies)
  - [Step 4: Running Locally](#step-4-running-locally)
  - [Step 5: Deployment](#step-5-deployment)
- [Features](#features)
  - [GraphQL](#graphql)
  - [Express](#express)
  - [Typescript](#typescript)
  - [JsonWebToken](#jsonwebtoken)
  - [TSLint](#tslint)
  - [Husky](#husky)
  - [Bluebird](#bluebird)
  - [Cors](#cors)

## Installation

Clone this repo to your local machine

### Step 1: Set up the Development Environment

You need to set up your development environment before you can do anything.

**Install [Node.js and NPM](https://nodejs.org/en/download/)**

- on OSX use [homebrew](http://brew.sh) `brew install node`
- on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

**Install yarn globally**

```bash
yarn global add yarn
```

> NOTE : If you work with a mac, we recommend to use homebrew for the installation.

**Install MongoDB**
Once Brew is installed, it is time to install MongoDB by issuing the following command on the Terminal:

```bash
brew install mongodb
```

### Step 2: Set up Env

Open .env file in a editor and add your configuration for database and other required fields.

```ts
NODE_ENV = development;
JWT_SECRET = "somesuperkey";
DB = "mongodb://localhost/awesomescrapper";
PORT = 4020;
REDIS_HOST = "redis-test.redislabs.com";
REDIS_PORT = 19837;
REDIS_PASS = "yourpasswordgoeshere";
```

### Step 3: Install dependencies

Navigate to server and run the below command:

```bash
$ yarn
```

### Step 4: Running Locally

Navigate to the **Express Server** directory and run the below command in your terminal :

```bash
$ yarn start
```

## Features

### GraphQL

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

### Express

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

### Typescript

TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language. TypeScript is designed for development of large applications and transcompiles to JavaScript.

### JsonWebToken

JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties.

### TSLint

TSLint is an extensible static analysis tool that checks TypeScript code for readability, maintainability, and functionality errors

### Husky

Husky can prevent bad git commit, git push and more 🐶 woof!

### Bluebird

Bluebird is a fully featured promise library with focus on innovative features and performance.

### Cors

Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served
