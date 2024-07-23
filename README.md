# express-typescript-node20-template

This is a template that developers to quickly hook up an expressJS server.

It includes the following:

| Installed  | Explanation                                                                                     |
| ---------- | ----------------------------------------------------------------------------------------------- |
| Typescript | adds static typing to Javascript. Helps in readability and debugging                            |
| Eslint     | linting runner to ensure consistent coding standards. Rules are defined in the `.eslintrc` file |
| Prettier   | default code formatter to ensure consistent code formatting across developers                   |
| Nodemon    | code change listener to automatically restart a server upon file changes                        |
| Changelog  | documents all feature changes in this `CHANGELOG.md` file                                       |
| Helmet     | Secures the app by modifying HTTP response headers.                                             |
| Morgan     | Logging library for every api request made by clients                                           |
| Swagger-UI | loads up api specification (from `/docs/openapi.yaml` file) in the UI                           |

## Folder Structure

This template follows the three-layer architecture. This folder structure is just a general guide, change it to suit your project needs

```bash
Client <-> Router Layer <-> Service Layer <-> Data Access Layer <-> Database
```

1. **Router layer**: responsible for exposing client routes, parsing and validating data from params and body before forwarding it to methods in the service layer

2. **Service layer**: encapsulate applications' domain specific business logic; interacts with data access layer or external services.

3. **Data access layer**: abstracts database client logic for the service layer to interact with.

The current folder structure is structured as follows:

| Layer       | Folder        | Explanation                                                                                                                           |
| ----------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Router      | `/routes`     | maps API endpoints to their respective controllers                                                                                    |
| Router      | `/controller` | performs data validation and parsing before forwarding it to service methods                                                          |
| Service     | `/services`   | contains business logic for the application                                                                                           |
| Data access | `/models`     | abstracts database code for the service layer to interact with. Usually contains ORM libraries for CRUD operations with the database. |

Other folders that are included in this repository include:

| Folder         | Explanation                                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------------------------------ |
| `/configs`     | non-sensitive application constants are stored here. These constants have the same value regardless of environment |
| `/interfaces`  | typescript interfaces that are shared is stored in this folder                                                     |
| `/middlewares` | generic middlewares such as validation, error handling, authentication that are shared is stored in this folder    |
| `/utils`       | utility functions that are shared are stored in this folder                                                        |
| `/docs`        | folder to store all documentation, including api specification                                                     |

File examples are stored in each folder described above, each marked with `/** <-- DELETE THIS FILE --> */` comment at the top of the file. Delete these files or modify them accordingly when needed.

## API Documentation

OpenAPI documentation (together with Swagger-UI) is added to this template for developers to describe their API specifications. The specification follows **[OpenAPI Specification version 3.1.0](https://spec.openapis.org/oas/v3.1.0)** definition.

The document is stored at `./src/docs/openapi.yaml`. After modification, restart your server to see the changes from Swagger UI at `/docs` endpoint

## Changelog

There are currently no changes to this template
