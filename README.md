# gql-tada-excess-props-demo

This demo shows how using gql.tada leaves you vulnerable to excess props being sent to the graphql server which becomes runtime errors. Typescript cannot detect these errors due to its structural typing system.

This project is a standard urql + react + gql tada project and contains no compile time errors but still has a glaring runtime error.

## Gettings started

- `clone repository`
- `npm install`
- `npm run start`
