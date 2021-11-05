# Slab Chat

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Linting By ESLint](https://raw.githubusercontent.com/aleen42/badges/master/src/eslint.svg)](https://eslint.org)
[![Typescript](https://raw.githubusercontent.com/aleen42/badges/master/src/typescript.svg)](https://typescriptlang.org)

Slab Chat is a discord alternative, made with modern web technologies, such as preact, fastify, mongodb, and windicss.

## Installing

Slab Chat requires docker and docker-compose.

In order to run Slab Chat, you need to clone this repository into a folder. That looks like this:
```bash
git clone https://github.com/flowtr/slab-chat.git slab
cd slab
git checkout next # use this branch
```
You then can copy `.env.example` into `.env` and edit any needed values.
Start Slab Chat with:
```bash
docker-compose up -d
```

You can then navigate to http://localhost:3000 to view it!