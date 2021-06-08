# connective-tissue

`connective-tissue` is a collection of linked list and ring data structures implemented in and for JavaScript. The structures in this library follow the specifications of their classical counterparts; they are well-tested and optimal implementations of:

- **singly linked list** *
- **circular linked list** *
- **doubly linked list** *
- **header linked list** *
- **circular doubly linked list**

*work in progress
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

size
next
prev
head
tail
insert
remove
pop
move
pushFront
pushBack
insertBefore
insertAfter
moveToFront
moveToBack
moveBefore
moveAfter
insertValue
pushBackList
pushFrontList

### Circular Singly Linked List

The Circular Singly Linked List does not use sentinels, instead implementing a pointer from the tail to the head. If the list contains a single node only, the head is a single-value ring that points to itself.

size
next
prev
head
tail
insert
remove
pop
move
pushFront
pushBack
insertBefore
insertAfter
moveToFront
moveToBack
moveBefore
moveAfter
insertValue
pushBackList
pushFrontList
