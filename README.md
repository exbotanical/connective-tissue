# connective-tissue

`connective-tissue` is a collection of linked list and ring data structures implemented in and for JavaScript. These are classical and optimal implementations of:

- **circular doubly linked list**

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
const { CircularLinkedList } = require('connective-tissue');
```

ESM:

```js
import { CircularLinkedList } from 'connective-tissue';
```

## Data Structures and API

### Circular Doubly Linked List

The Circular Doubly Linked List is internally implemented as a ring, such that the sentinel terminator is both the next node of the tail and the previous node of the head.
