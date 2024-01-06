```bash

npm init -y

npm i mongoose express body-parser bcrypt fs swagger-ui-express swagger-jsdoc

# DEV DEPENDENCIES:

npm i nodemon -D # '-D' same as '--save-dev'

# ES-LINT:

npm init @eslint/config
# see modifications in: package.json
# see modifications in: .eslintrc.json
# ESLint VSC extention - will highlights errors in code.
# then: 
npm run lint:check 
npm run lint:fix

# TESTS:

npm i mocha chai -D

# Create "launch.json" (for Node.js) in VSC and configure it:

{
    "...": "...",
    "program": "${workspaceFolder}\\node_gen_4\\node_modules\\mocha\\bin\\_mocha",
    "args": [
        "-u",
        "bdd", // set to bdd, not to tdd
        "--timeout",
        "999999",
        "--colors",
        "${workspaceFolder}\\node_gen_4\\tests\\**\\*.js"
    ],
    "internalConsoleOptions": "openOnSessionStart"
}

```