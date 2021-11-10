# connective-tissue

[![Coverage Status](https://coveralls.io/repos/github/MatthewZito/connective-tissue/badge.svg?branch=master)](https://coveralls.io/github/MatthewZito/connective-tissue?branch=master)
[![Continuous Deployment](https://github.com/MatthewZito/connective-tissue/actions/workflows/cd.yml/badge.svg)](https://github.com/MatthewZito/connective-tissue/actions/workflows/cd.yml)
[![Continuous Integration](https://github.com/MatthewZito/connective-tissue/actions/workflows/ci.yml/badge.svg)](https://github.com/MatthewZito/connective-tissue/actions/workflows/ci.yml)
[![npm version](https://badge.fury.io/js/connective-tissue.svg)](https://badge.fury.io/js/connective-tissue)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

`connective-tissue` is a collection of linked list and ring data structures implemented in and for JavaScript. The structures in this library follow the specifications of their classical counterparts; they are well-tested and optimal implementations of:

- [Singly Linked List](./src/SinglyLinkedList.ts)
- [Circular Singly Linked List](./src/CircularSinglyLinkedList.ts)
- [Circular Doubly Linked List](./src/CircularDoublyLinkedList.ts) (sentinel-terminated)

## Installation

```bash
npm install connective-tissue
```

OR

```bash
yarn add connective-tissue
```

## Supported Environments

`connective-tissue` currently supports UMD, CommonJS (node versions >= 10), and ESM build-targets

Commonjs:

```js
const { CircularDoublyLinkedList } = require('connective-tissue');
```

ESM:

```js
import { CircularDoublyLinkedList } from 'connective-tissue';
```

## Documentation

See [docs](https://matthewzito.github.io/connective-tissue/)
