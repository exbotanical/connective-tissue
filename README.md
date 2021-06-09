[![Build Status](https://travis-ci.com/MatthewZito/connective-tissue.svg?branch=master)](https://travis-ci.com/MatthewZito/connective-tissue)
[![npm version](https://badge.fury.io/js/connective-tissue.svg)](https://badge.fury.io/js/connective-tissue)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

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
const { CircularDoublyLinkedList } = require('connective-tissue');
```

ESM:

```js
import { CircularDoublyLinkedList } from 'connective-tissue';
```

## API Reference

# Modules

<dl>
<dt><a href="#module_Atomics">Atomics</a></dt>
<dd></dd>
<dt><a href="#module_Atomics">Atomics</a></dt>
<dd></dd>
</dl>

# Classes

<dl>
<dt><a href="#CircularDoublyLinkedList">CircularDoublyLinkedList</a></dt>
<dd></dd>
<dt><a href="#CircularSinglyLinkedList">CircularSinglyLinkedList</a></dt>
<dd></dd>
<dt><a href="#CircularDoublyLinkedList">CircularDoublyLinkedList</a></dt>
<dd></dd>
<dt><a href="#CircularSinglyLinkedList">CircularSinglyLinkedList</a></dt>
<dd></dd>
</dl>


<br><a name="module_Atomics"></a>

# Atomics

* [Atomics](#module_Atomics)
    * [.Node](#module_Atomics.Node)
        * [new Node(value)](#new_module_Atomics.Node_new)
        * [new Node(value)](#new_module_Atomics.Node_new)
    * [.ForwardNode](#module_Atomics.ForwardNode)
        * [new ForwardNode(value)](#new_module_Atomics.ForwardNode_new)
        * [new ForwardNode(value)](#new_module_Atomics.ForwardNode_new)
    * [.Sentinel](#module_Atomics.Sentinel)
        * [new Sentinel()](#new_module_Atomics.Sentinel_new)
        * [new Sentinel()](#new_module_Atomics.Sentinel_new)
    * [.Node](#module_Atomics.Node)
        * [new Node(value)](#new_module_Atomics.Node_new)
        * [new Node(value)](#new_module_Atomics.Node_new)
    * [.ForwardNode](#module_Atomics.ForwardNode)
        * [new ForwardNode(value)](#new_module_Atomics.ForwardNode_new)
        * [new ForwardNode(value)](#new_module_Atomics.ForwardNode_new)
    * [.Sentinel](#module_Atomics.Sentinel)
        * [new Sentinel()](#new_module_Atomics.Sentinel_new)
        * [new Sentinel()](#new_module_Atomics.Sentinel_new)


<br><a name="module_Atomics.Node"></a>

## Atomics.Node

* [.Node](#module_Atomics.Node)
    * [new Node(value)](#new_module_Atomics.Node_new)
    * [new Node(value)](#new_module_Atomics.Node_new)


<br><a name="new_module_Atomics.Node_new"></a>

### new Node(value)
> Implements a bi-directional node
> 
> `Node` implements as a member a pointer to the list to which it belongs


| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<br><a name="new_module_Atomics.Node_new"></a>

### new Node(value)
> Implements a bi-directional node
> 
> `Node` implements as a member a pointer to the list to which it belongs


| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<br><a name="module_Atomics.ForwardNode"></a>

## Atomics.ForwardNode

* [.ForwardNode](#module_Atomics.ForwardNode)
    * [new ForwardNode(value)](#new_module_Atomics.ForwardNode_new)
    * [new ForwardNode(value)](#new_module_Atomics.ForwardNode_new)


<br><a name="new_module_Atomics.ForwardNode_new"></a>

### new ForwardNode(value)
> Implements a uni-directional (forward) node
> 
> `ForwardNode` implements as a member a pointer to the list to which it belongs


| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<br><a name="new_module_Atomics.ForwardNode_new"></a>

### new ForwardNode(value)
> Implements a uni-directional (forward) node
> 
> `ForwardNode` implements as a member a pointer to the list to which it belongs


| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<br><a name="module_Atomics.Sentinel"></a>

## Atomics.Sentinel

* [.Sentinel](#module_Atomics.Sentinel)
    * [new Sentinel()](#new_module_Atomics.Sentinel_new)
    * [new Sentinel()](#new_module_Atomics.Sentinel_new)


<br><a name="new_module_Atomics.Sentinel_new"></a>

### new Sentinel()
> Implements a ring data structure for terminating a bi-directional list


<br><a name="new_module_Atomics.Sentinel_new"></a>

### new Sentinel()
> Implements a ring data structure for terminating a bi-directional list


<br><a name="module_Atomics.Node"></a>

## Atomics.Node

* [.Node](#module_Atomics.Node)
    * [new Node(value)](#new_module_Atomics.Node_new)
    * [new Node(value)](#new_module_Atomics.Node_new)


<br><a name="new_module_Atomics.Node_new"></a>

### new Node(value)
> Implements a bi-directional node
> 
> `Node` implements as a member a pointer to the list to which it belongs


| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<br><a name="new_module_Atomics.Node_new"></a>

### new Node(value)
> Implements a bi-directional node
> 
> `Node` implements as a member a pointer to the list to which it belongs


| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<br><a name="module_Atomics.ForwardNode"></a>

## Atomics.ForwardNode

* [.ForwardNode](#module_Atomics.ForwardNode)
    * [new ForwardNode(value)](#new_module_Atomics.ForwardNode_new)
    * [new ForwardNode(value)](#new_module_Atomics.ForwardNode_new)


<br><a name="new_module_Atomics.ForwardNode_new"></a>

### new ForwardNode(value)
> Implements a uni-directional (forward) node
> 
> `ForwardNode` implements as a member a pointer to the list to which it belongs


| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<br><a name="new_module_Atomics.ForwardNode_new"></a>

### new ForwardNode(value)
> Implements a uni-directional (forward) node
> 
> `ForwardNode` implements as a member a pointer to the list to which it belongs


| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<br><a name="module_Atomics.Sentinel"></a>

## Atomics.Sentinel

* [.Sentinel](#module_Atomics.Sentinel)
    * [new Sentinel()](#new_module_Atomics.Sentinel_new)
    * [new Sentinel()](#new_module_Atomics.Sentinel_new)


<br><a name="new_module_Atomics.Sentinel_new"></a>

### new Sentinel()
> Implements a ring data structure for terminating a bi-directional list


<br><a name="new_module_Atomics.Sentinel_new"></a>

### new Sentinel()
> Implements a ring data structure for terminating a bi-directional list


<br><a name="module_Atomics"></a>

# Atomics

* [Atomics](#module_Atomics)
    * [.Node](#module_Atomics.Node)
        * [new Node(value)](#new_module_Atomics.Node_new)
        * [new Node(value)](#new_module_Atomics.Node_new)
    * [.ForwardNode](#module_Atomics.ForwardNode)
        * [new ForwardNode(value)](#new_module_Atomics.ForwardNode_new)
        * [new ForwardNode(value)](#new_module_Atomics.ForwardNode_new)
    * [.Sentinel](#module_Atomics.Sentinel)
        * [new Sentinel()](#new_module_Atomics.Sentinel_new)
        * [new Sentinel()](#new_module_Atomics.Sentinel_new)
    * [.Node](#module_Atomics.Node)
        * [new Node(value)](#new_module_Atomics.Node_new)
        * [new Node(value)](#new_module_Atomics.Node_new)
    * [.ForwardNode](#module_Atomics.ForwardNode)
        * [new ForwardNode(value)](#new_module_Atomics.ForwardNode_new)
        * [new ForwardNode(value)](#new_module_Atomics.ForwardNode_new)
    * [.Sentinel](#module_Atomics.Sentinel)
        * [new Sentinel()](#new_module_Atomics.Sentinel_new)
        * [new Sentinel()](#new_module_Atomics.Sentinel_new)


<br><a name="module_Atomics.Node"></a>

## Atomics.Node

* [.Node](#module_Atomics.Node)
    * [new Node(value)](#new_module_Atomics.Node_new)
    * [new Node(value)](#new_module_Atomics.Node_new)


<br><a name="new_module_Atomics.Node_new"></a>

### new Node(value)
> Implements a bi-directional node
> 
> `Node` implements as a member a pointer to the list to which it belongs


| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<br><a name="new_module_Atomics.Node_new"></a>

### new Node(value)
> Implements a bi-directional node
> 
> `Node` implements as a member a pointer to the list to which it belongs


| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<br><a name="module_Atomics.ForwardNode"></a>

## Atomics.ForwardNode

* [.ForwardNode](#module_Atomics.ForwardNode)
    * [new ForwardNode(value)](#new_module_Atomics.ForwardNode_new)
    * [new ForwardNode(value)](#new_module_Atomics.ForwardNode_new)


<br><a name="new_module_Atomics.ForwardNode_new"></a>

### new ForwardNode(value)
> Implements a uni-directional (forward) node
> 
> `ForwardNode` implements as a member a pointer to the list to which it belongs


| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<br><a name="new_module_Atomics.ForwardNode_new"></a>

### new ForwardNode(value)
> Implements a uni-directional (forward) node
> 
> `ForwardNode` implements as a member a pointer to the list to which it belongs


| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<br><a name="module_Atomics.Sentinel"></a>

## Atomics.Sentinel

* [.Sentinel](#module_Atomics.Sentinel)
    * [new Sentinel()](#new_module_Atomics.Sentinel_new)
    * [new Sentinel()](#new_module_Atomics.Sentinel_new)


<br><a name="new_module_Atomics.Sentinel_new"></a>

### new Sentinel()
> Implements a ring data structure for terminating a bi-directional list


<br><a name="new_module_Atomics.Sentinel_new"></a>

### new Sentinel()
> Implements a ring data structure for terminating a bi-directional list


<br><a name="module_Atomics.Node"></a>

## Atomics.Node

* [.Node](#module_Atomics.Node)
    * [new Node(value)](#new_module_Atomics.Node_new)
    * [new Node(value)](#new_module_Atomics.Node_new)


<br><a name="new_module_Atomics.Node_new"></a>

### new Node(value)
> Implements a bi-directional node
> 
> `Node` implements as a member a pointer to the list to which it belongs


| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<br><a name="new_module_Atomics.Node_new"></a>

### new Node(value)
> Implements a bi-directional node
> 
> `Node` implements as a member a pointer to the list to which it belongs


| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<br><a name="module_Atomics.ForwardNode"></a>

## Atomics.ForwardNode

* [.ForwardNode](#module_Atomics.ForwardNode)
    * [new ForwardNode(value)](#new_module_Atomics.ForwardNode_new)
    * [new ForwardNode(value)](#new_module_Atomics.ForwardNode_new)


<br><a name="new_module_Atomics.ForwardNode_new"></a>

### new ForwardNode(value)
> Implements a uni-directional (forward) node
> 
> `ForwardNode` implements as a member a pointer to the list to which it belongs


| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<br><a name="new_module_Atomics.ForwardNode_new"></a>

### new ForwardNode(value)
> Implements a uni-directional (forward) node
> 
> `ForwardNode` implements as a member a pointer to the list to which it belongs


| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<br><a name="module_Atomics.Sentinel"></a>

## Atomics.Sentinel

* [.Sentinel](#module_Atomics.Sentinel)
    * [new Sentinel()](#new_module_Atomics.Sentinel_new)
    * [new Sentinel()](#new_module_Atomics.Sentinel_new)


<br><a name="new_module_Atomics.Sentinel_new"></a>

### new Sentinel()
> Implements a ring data structure for terminating a bi-directional list


<br><a name="new_module_Atomics.Sentinel_new"></a>

### new Sentinel()
> Implements a ring data structure for terminating a bi-directional list


<br><a name="CircularDoublyLinkedList"></a>

# CircularDoublyLinkedList

* [CircularDoublyLinkedList](#CircularDoublyLinkedList)
    * [new CircularDoublyLinkedList()](#new_CircularDoublyLinkedList_new)
    * [new CircularDoublyLinkedList()](#new_CircularDoublyLinkedList_new)
    * _instance_
        * [.sentinel](#CircularDoublyLinkedList+sentinel)
        * [.length](#CircularDoublyLinkedList+length)
        * [.sentinel](#CircularDoublyLinkedList+sentinel)
        * [.length](#CircularDoublyLinkedList+length)
        * [.size()](#CircularDoublyLinkedList+size) ⇒ <code>number</code>
        * [.next(node)](#CircularDoublyLinkedList+next) ⇒ <code>Node</code> \| <code>null</code>
        * [.prev(node)](#CircularDoublyLinkedList+prev) ⇒ <code>Node</code> \| <code>null</code>
        * [.head()](#CircularDoublyLinkedList+head) ⇒ <code>Node</code> \| <code>null</code>
        * [.tail()](#CircularDoublyLinkedList+tail) ⇒ <code>Node</code> \| <code>null</code>
        * [.insert(node, at)](#CircularDoublyLinkedList+insert) ⇒ <code>Node</code>
        * [.remove(node)](#CircularDoublyLinkedList+remove) ⇒ <code>Node</code>
        * [.pop(node)](#CircularDoublyLinkedList+pop) ⇒ <code>Node</code>
        * [.move(node, at)](#CircularDoublyLinkedList+move) ⇒ <code>Node</code>
        * [.pushFront(value)](#CircularDoublyLinkedList+pushFront) ⇒ <code>Node</code>
        * [.pushBack(value)](#CircularDoublyLinkedList+pushBack) ⇒ <code>Node</code>
        * [.insertBefore(value, mark)](#CircularDoublyLinkedList+insertBefore) ⇒ <code>Node</code>
        * [.insertAfter(value, mark)](#CircularDoublyLinkedList+insertAfter) ⇒ <code>Node</code>
        * [.moveToFront(node)](#CircularDoublyLinkedList+moveToFront) ⇒ <code>Node</code>
        * [.moveToBack(node)](#CircularDoublyLinkedList+moveToBack) ⇒ <code>Node</code>
        * [.moveBefore(node, mark)](#CircularDoublyLinkedList+moveBefore) ⇒ <code>Node</code>
        * [.moveAfter(node, mark)](#CircularDoublyLinkedList+moveAfter) ⇒ <code>Node</code>
        * [.insertValue(value, at)](#CircularDoublyLinkedList+insertValue) ⇒ <code>Node</code>
        * [.pushBackList(other)](#CircularDoublyLinkedList+pushBackList)
        * [.pushFrontList(other)](#CircularDoublyLinkedList+pushFrontList)
        * [.size()](#CircularDoublyLinkedList+size) ⇒ <code>number</code>
        * [.next(node)](#CircularDoublyLinkedList+next) ⇒ <code>Node</code> \| <code>null</code>
        * [.prev(node)](#CircularDoublyLinkedList+prev) ⇒ <code>Node</code> \| <code>null</code>
        * [.head()](#CircularDoublyLinkedList+head) ⇒ <code>Node</code> \| <code>null</code>
        * [.tail()](#CircularDoublyLinkedList+tail) ⇒ <code>Node</code> \| <code>null</code>
        * [.insert(node, at)](#CircularDoublyLinkedList+insert) ⇒ <code>Node</code>
        * [.remove(node)](#CircularDoublyLinkedList+remove) ⇒ <code>Node</code>
        * [.pop(node)](#CircularDoublyLinkedList+pop) ⇒ <code>Node</code>
        * [.move(node, at)](#CircularDoublyLinkedList+move) ⇒ <code>Node</code>
        * [.pushFront(value)](#CircularDoublyLinkedList+pushFront) ⇒ <code>Node</code>
        * [.pushBack(value)](#CircularDoublyLinkedList+pushBack) ⇒ <code>Node</code>
        * [.insertBefore(value, mark)](#CircularDoublyLinkedList+insertBefore) ⇒ <code>Node</code>
        * [.insertAfter(value, mark)](#CircularDoublyLinkedList+insertAfter) ⇒ <code>Node</code>
        * [.moveToFront(node)](#CircularDoublyLinkedList+moveToFront) ⇒ <code>Node</code>
        * [.moveToBack(node)](#CircularDoublyLinkedList+moveToBack) ⇒ <code>Node</code>
        * [.moveBefore(node, mark)](#CircularDoublyLinkedList+moveBefore) ⇒ <code>Node</code>
        * [.moveAfter(node, mark)](#CircularDoublyLinkedList+moveAfter) ⇒ <code>Node</code>
        * [.insertValue(value, at)](#CircularDoublyLinkedList+insertValue) ⇒ <code>Node</code>
        * [.pushBackList(other)](#CircularDoublyLinkedList+pushBackList)
        * [.pushFrontList(other)](#CircularDoublyLinkedList+pushFrontList)
    * _static_
        * [.create()](#CircularDoublyLinkedList.create) ⇒ [<code>CircularDoublyLinkedList</code>](#CircularDoublyLinkedList)
        * [.create()](#CircularDoublyLinkedList.create) ⇒ [<code>CircularDoublyLinkedList</code>](#CircularDoublyLinkedList)


<br><a name="new_CircularDoublyLinkedList_new"></a>

## new CircularDoublyLinkedList()
> Implements a circular doubly linked list as a ring, such that
> the sentinel node is both the next node of the tail, and the previous node
> of the head


<br><a name="new_CircularDoublyLinkedList_new"></a>

## new CircularDoublyLinkedList()
> Implements a circular doubly linked list as a ring, such that
> the sentinel node is both the next node of the tail, and the previous node
> of the head


<br><a name="CircularDoublyLinkedList+sentinel"></a>

## circularDoublyLinkedList.sentinel
> The sentinel terminator node

**Properties**

| Type |
| --- |
| <code>Sentinel</code> | 


<br><a name="CircularDoublyLinkedList+length"></a>

## circularDoublyLinkedList.length
> The list length, sans the sentinel terminator

**Properties**

| Type |
| --- |
| <code>number</code> | 


<br><a name="CircularDoublyLinkedList+sentinel"></a>

## circularDoublyLinkedList.sentinel
> The sentinel terminator node

**Properties**

| Type |
| --- |
| <code>Sentinel</code> | 


<br><a name="CircularDoublyLinkedList+length"></a>

## circularDoublyLinkedList.length
> The list length, sans the sentinel terminator

**Properties**

| Type |
| --- |
| <code>number</code> | 


<br><a name="CircularDoublyLinkedList+size"></a>

## circularDoublyLinkedList.size() ⇒ <code>number</code>
> The current size of the list, sans the sentinel node


<br><a name="CircularDoublyLinkedList+next"></a>

## circularDoublyLinkedList.next(node) ⇒ <code>Node</code> \| <code>null</code>
> Returns the next list node, if extant; else, null


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+prev"></a>

## circularDoublyLinkedList.prev(node) ⇒ <code>Node</code> \| <code>null</code>
> Returns the previous list node, if extant; else, null


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+head"></a>

## circularDoublyLinkedList.head() ⇒ <code>Node</code> \| <code>null</code>
> Returns the head node of the list or null if the list is empty


<br><a name="CircularDoublyLinkedList+tail"></a>

## circularDoublyLinkedList.tail() ⇒ <code>Node</code> \| <code>null</code>
> Returns the tail node of the list or null if the list is empty


<br><a name="CircularDoublyLinkedList+insert"></a>

## circularDoublyLinkedList.insert(node, at) ⇒ <code>Node</code>
> Insert a new node after a given node `at`


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 
| at | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+remove"></a>

## circularDoublyLinkedList.remove(node) ⇒ <code>Node</code>
> Remove a given node from the list

**Returns**: <code>Node</code> - The removed node  

| Param | Type |
| --- | --- |
| node | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+pop"></a>

## circularDoublyLinkedList.pop(node) ⇒ <code>Node</code>
> Remove the last node from the list

**Returns**: <code>Node</code> - The removed node  

| Param | Type |
| --- | --- |
| node | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+move"></a>

## circularDoublyLinkedList.move(node, at) ⇒ <code>Node</code>
> Move given node to `at`


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 
| at | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+pushFront"></a>

## circularDoublyLinkedList.pushFront(value) ⇒ <code>Node</code>
> Push a new node with value `value` to the front of the list


| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<br><a name="CircularDoublyLinkedList+pushBack"></a>

## circularDoublyLinkedList.pushBack(value) ⇒ <code>Node</code>
> Push a new node with value `value` to the back of the list


| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<br><a name="CircularDoublyLinkedList+insertBefore"></a>

## circularDoublyLinkedList.insertBefore(value, mark) ⇒ <code>Node</code>
> Insert a new node with value `value` immediately before `mark`
> 
> If `mark` is not an element of the list, the list is not modified
> 
> `mark` must not be null


| Param | Type |
| --- | --- |
| value | <code>any</code> | 
| mark | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+insertAfter"></a>

## circularDoublyLinkedList.insertAfter(value, mark) ⇒ <code>Node</code>
> Insert a new node with value `value` immediately after `mark`
> 
> If `mark` is not an element of the list, the list is not modified
> 
> `mark` must not be null


| Param | Type |
| --- | --- |
| value | <code>any</code> | 
| mark | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+moveToFront"></a>

## circularDoublyLinkedList.moveToFront(node) ⇒ <code>Node</code>
> Move a node to the front of the list
> 
> If the given node is not an element of the list, the list is not modified
> 
> The given node must not be null


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+moveToBack"></a>

## circularDoublyLinkedList.moveToBack(node) ⇒ <code>Node</code>
> Move a node to the back of the list
> 
> If the given node is not an element of the list, the list is not modified
> 
> The given node must not be null


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+moveBefore"></a>

## circularDoublyLinkedList.moveBefore(node, mark) ⇒ <code>Node</code>
> Move a given node to its new position before `mark`
> 
> If either the given node or mark are not an element of the list, or node == mark, the list is not modified
> 
> Both the node and mark must not be null


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 
| mark | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+moveAfter"></a>

## circularDoublyLinkedList.moveAfter(node, mark) ⇒ <code>Node</code>
> Move a given node to its new position after `mark`
> 
> If either the given node or mark are not an element of the list, or node == mark, the list is not modified
> 
> Both the node and mark must not be null


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 
| mark | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+insertValue"></a>

## circularDoublyLinkedList.insertValue(value, at) ⇒ <code>Node</code>
> Convenience for inserting a given value into a new node after a given node `at`


| Param | Type |
| --- | --- |
| value | <code>any</code> | 
| at | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+pushBackList"></a>

## circularDoublyLinkedList.pushBackList(other)
> Insert a copy of another list at the back of the caller list
> 
> The lists may be the same, but must not be null


| Param | Type |
| --- | --- |
| other | [<code>CircularDoublyLinkedList</code>](#CircularDoublyLinkedList) | 


<br><a name="CircularDoublyLinkedList+pushFrontList"></a>

## circularDoublyLinkedList.pushFrontList(other)
> Insert a copy of another list at the front of the caller list
> 
> The lists may be the same, but must not be null


| Param | Type |
| --- | --- |
| other | [<code>CircularDoublyLinkedList</code>](#CircularDoublyLinkedList) | 


<br><a name="CircularDoublyLinkedList+size"></a>

## circularDoublyLinkedList.size() ⇒ <code>number</code>
> The current size of the list, sans the sentinel node


<br><a name="CircularDoublyLinkedList+next"></a>

## circularDoublyLinkedList.next(node) ⇒ <code>Node</code> \| <code>null</code>
> Returns the next list node, if extant; else, null


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+prev"></a>

## circularDoublyLinkedList.prev(node) ⇒ <code>Node</code> \| <code>null</code>
> Returns the previous list node, if extant; else, null


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+head"></a>

## circularDoublyLinkedList.head() ⇒ <code>Node</code> \| <code>null</code>
> Returns the head node of the list or null if the list is empty


<br><a name="CircularDoublyLinkedList+tail"></a>

## circularDoublyLinkedList.tail() ⇒ <code>Node</code> \| <code>null</code>
> Returns the tail node of the list or null if the list is empty


<br><a name="CircularDoublyLinkedList+insert"></a>

## circularDoublyLinkedList.insert(node, at) ⇒ <code>Node</code>
> Insert a new node after a given node `at`


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 
| at | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+remove"></a>

## circularDoublyLinkedList.remove(node) ⇒ <code>Node</code>
> Remove a given node from the list

**Returns**: <code>Node</code> - The removed node  

| Param | Type |
| --- | --- |
| node | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+pop"></a>

## circularDoublyLinkedList.pop(node) ⇒ <code>Node</code>
> Remove the last node from the list

**Returns**: <code>Node</code> - The removed node  

| Param | Type |
| --- | --- |
| node | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+move"></a>

## circularDoublyLinkedList.move(node, at) ⇒ <code>Node</code>
> Move given node to `at`


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 
| at | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+pushFront"></a>

## circularDoublyLinkedList.pushFront(value) ⇒ <code>Node</code>
> Push a new node with value `value` to the front of the list


| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<br><a name="CircularDoublyLinkedList+pushBack"></a>

## circularDoublyLinkedList.pushBack(value) ⇒ <code>Node</code>
> Push a new node with value `value` to the back of the list


| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<br><a name="CircularDoublyLinkedList+insertBefore"></a>

## circularDoublyLinkedList.insertBefore(value, mark) ⇒ <code>Node</code>
> Insert a new node with value `value` immediately before `mark`
> 
> If `mark` is not an element of the list, the list is not modified
> 
> `mark` must not be null


| Param | Type |
| --- | --- |
| value | <code>any</code> | 
| mark | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+insertAfter"></a>

## circularDoublyLinkedList.insertAfter(value, mark) ⇒ <code>Node</code>
> Insert a new node with value `value` immediately after `mark`
> 
> If `mark` is not an element of the list, the list is not modified
> 
> `mark` must not be null


| Param | Type |
| --- | --- |
| value | <code>any</code> | 
| mark | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+moveToFront"></a>

## circularDoublyLinkedList.moveToFront(node) ⇒ <code>Node</code>
> Move a node to the front of the list
> 
> If the given node is not an element of the list, the list is not modified
> 
> The given node must not be null


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+moveToBack"></a>

## circularDoublyLinkedList.moveToBack(node) ⇒ <code>Node</code>
> Move a node to the back of the list
> 
> If the given node is not an element of the list, the list is not modified
> 
> The given node must not be null


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+moveBefore"></a>

## circularDoublyLinkedList.moveBefore(node, mark) ⇒ <code>Node</code>
> Move a given node to its new position before `mark`
> 
> If either the given node or mark are not an element of the list, or node == mark, the list is not modified
> 
> Both the node and mark must not be null


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 
| mark | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+moveAfter"></a>

## circularDoublyLinkedList.moveAfter(node, mark) ⇒ <code>Node</code>
> Move a given node to its new position after `mark`
> 
> If either the given node or mark are not an element of the list, or node == mark, the list is not modified
> 
> Both the node and mark must not be null


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 
| mark | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+insertValue"></a>

## circularDoublyLinkedList.insertValue(value, at) ⇒ <code>Node</code>
> Convenience for inserting a given value into a new node after a given node `at`


| Param | Type |
| --- | --- |
| value | <code>any</code> | 
| at | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+pushBackList"></a>

## circularDoublyLinkedList.pushBackList(other)
> Insert a copy of another list at the back of the caller list
> 
> The lists may be the same, but must not be null


| Param | Type |
| --- | --- |
| other | [<code>CircularDoublyLinkedList</code>](#CircularDoublyLinkedList) | 


<br><a name="CircularDoublyLinkedList+pushFrontList"></a>

## circularDoublyLinkedList.pushFrontList(other)
> Insert a copy of another list at the front of the caller list
> 
> The lists may be the same, but must not be null


| Param | Type |
| --- | --- |
| other | [<code>CircularDoublyLinkedList</code>](#CircularDoublyLinkedList) | 


<br><a name="CircularDoublyLinkedList.create"></a>

## CircularDoublyLinkedList.create() ⇒ [<code>CircularDoublyLinkedList</code>](#CircularDoublyLinkedList)
> Instantiate an empty circular doubly linked list


<br><a name="CircularDoublyLinkedList.create"></a>

## CircularDoublyLinkedList.create() ⇒ [<code>CircularDoublyLinkedList</code>](#CircularDoublyLinkedList)
> Instantiate an empty circular doubly linked list


<br><a name="CircularSinglyLinkedList"></a>

# CircularSinglyLinkedList

* [CircularSinglyLinkedList](#CircularSinglyLinkedList)
    * [new CircularSinglyLinkedList()](#new_CircularSinglyLinkedList_new)
    * [new CircularSinglyLinkedList()](#new_CircularSinglyLinkedList_new)
    * _instance_
        * [.head](#CircularSinglyLinkedList+head)
        * [.length](#CircularSinglyLinkedList+length)
        * [.head](#CircularSinglyLinkedList+head)
        * [.length](#CircularSinglyLinkedList+length)
        * [.size()](#CircularSinglyLinkedList+size) ⇒ <code>number</code>
        * [.next(node)](#CircularSinglyLinkedList+next) ⇒ <code>Node</code> \| <code>null</code>
        * [.prev(node)](#CircularSinglyLinkedList+prev) ⇒ <code>Node</code> \| <code>null</code>
        * [.remove(node)](#CircularSinglyLinkedList+remove) ⇒ <code>Node</code> \| <code>null</code>
        * [.pop(node)](#CircularSinglyLinkedList+pop) ⇒ <code>Node</code> \| <code>null</code>
        * [.moveAfter(node, mark)](#CircularSinglyLinkedList+moveAfter) ⇒ <code>ForwardNode</code>
        * [.moveBefore(node, mark)](#CircularSinglyLinkedList+moveBefore) ⇒ <code>ForwardNode</code>
        * [.pushFront(value)](#CircularSinglyLinkedList+pushFront) ⇒ <code>ForwardNode</code>
        * [.pushBack(value)](#CircularSinglyLinkedList+pushBack) ⇒ <code>ForwardNode</code>
        * [.insertAfter(value, mark)](#CircularSinglyLinkedList+insertAfter) ⇒ <code>ForwardNode</code> \| <code>null</code>
        * [.insertBefore(value, mark)](#CircularSinglyLinkedList+insertBefore) ⇒ <code>ForwardNode</code> \| <code>null</code>
        * [.pushBackList(other)](#CircularSinglyLinkedList+pushBackList)
        * [.pushFrontList(other)](#CircularSinglyLinkedList+pushFrontList)
        * [.size()](#CircularSinglyLinkedList+size) ⇒ <code>number</code>
        * [.next(node)](#CircularSinglyLinkedList+next) ⇒ <code>Node</code> \| <code>null</code>
        * [.prev(node)](#CircularSinglyLinkedList+prev) ⇒ <code>Node</code> \| <code>null</code>
        * [.remove(node)](#CircularSinglyLinkedList+remove) ⇒ <code>Node</code> \| <code>null</code>
        * [.pop(node)](#CircularSinglyLinkedList+pop) ⇒ <code>Node</code> \| <code>null</code>
        * [.moveAfter(node, mark)](#CircularSinglyLinkedList+moveAfter) ⇒ <code>ForwardNode</code>
        * [.moveBefore(node, mark)](#CircularSinglyLinkedList+moveBefore) ⇒ <code>ForwardNode</code>
        * [.pushFront(value)](#CircularSinglyLinkedList+pushFront) ⇒ <code>ForwardNode</code>
        * [.pushBack(value)](#CircularSinglyLinkedList+pushBack) ⇒ <code>ForwardNode</code>
        * [.insertAfter(value, mark)](#CircularSinglyLinkedList+insertAfter) ⇒ <code>ForwardNode</code> \| <code>null</code>
        * [.insertBefore(value, mark)](#CircularSinglyLinkedList+insertBefore) ⇒ <code>ForwardNode</code> \| <code>null</code>
        * [.pushBackList(other)](#CircularSinglyLinkedList+pushBackList)
        * [.pushFrontList(other)](#CircularSinglyLinkedList+pushFrontList)
    * _static_
        * [.create()](#CircularSinglyLinkedList.create) ⇒ [<code>CircularSinglyLinkedList</code>](#CircularSinglyLinkedList)
        * [.create()](#CircularSinglyLinkedList.create) ⇒ [<code>CircularSinglyLinkedList</code>](#CircularSinglyLinkedList)


<br><a name="new_CircularSinglyLinkedList_new"></a>

## new CircularSinglyLinkedList()
> Implements a circular singular (linear) linked list


<br><a name="new_CircularSinglyLinkedList_new"></a>

## new CircularSinglyLinkedList()
> Implements a circular singular (linear) linked list


<br><a name="CircularSinglyLinkedList+head"></a>

## circularSinglyLinkedList.head
> The head node; implemented internally as a ring

**Properties**

| Type |
| --- |
| <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+length"></a>

## circularSinglyLinkedList.length
> The current size of the list

**Properties**

| Type |
| --- |
| <code>number</code> | 


<br><a name="CircularSinglyLinkedList+head"></a>

## circularSinglyLinkedList.head
> The head node; implemented internally as a ring

**Properties**

| Type |
| --- |
| <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+length"></a>

## circularSinglyLinkedList.length
> The current size of the list

**Properties**

| Type |
| --- |
| <code>number</code> | 


<br><a name="CircularSinglyLinkedList+size"></a>

## circularSinglyLinkedList.size() ⇒ <code>number</code>
> The current size of the list


<br><a name="CircularSinglyLinkedList+next"></a>

## circularSinglyLinkedList.next(node) ⇒ <code>Node</code> \| <code>null</code>
> Returns the next list node, if extant; else, null


| Param | Type |
| --- | --- |
| node | <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+prev"></a>

## circularSinglyLinkedList.prev(node) ⇒ <code>Node</code> \| <code>null</code>
> Returns the previous list node, if extant; else, null


| Param | Type |
| --- | --- |
| node | <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+remove"></a>

## circularSinglyLinkedList.remove(node) ⇒ <code>Node</code> \| <code>null</code>
> Remove a given node from the list

**Returns**: <code>Node</code> \| <code>null</code> - The removed node  

| Param | Type |
| --- | --- |
| node | <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+pop"></a>

## circularSinglyLinkedList.pop(node) ⇒ <code>Node</code> \| <code>null</code>
> Remove the last node from the list

**Returns**: <code>Node</code> \| <code>null</code> - The removed node  

| Param | Type |
| --- | --- |
| node | <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+moveAfter"></a>

## circularSinglyLinkedList.moveAfter(node, mark) ⇒ <code>ForwardNode</code>
> Move a given node to its new position after `mark`
> 
> If either the given node or mark are not an element of the list; node == mark; or mark.next == node, the list is not modified
> 
> Both the node and mark must not be null


| Param | Type |
| --- | --- |
| node | <code>ForwardNode</code> | 
| mark | <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+moveBefore"></a>

## circularSinglyLinkedList.moveBefore(node, mark) ⇒ <code>ForwardNode</code>
> Move a given node to its new position before `mark`
> 
> If either the given node or mark are not an element of the list; node == mark; or node.next == mark, the list is not modified
> 
> Both the node and mark must not be null


| Param | Type |
| --- | --- |
| node | <code>ForwardNode</code> | 
| mark | <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+pushFront"></a>

## circularSinglyLinkedList.pushFront(value) ⇒ <code>ForwardNode</code>
> Push a new node with value `value` to the front of the list


| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<br><a name="CircularSinglyLinkedList+pushBack"></a>

## circularSinglyLinkedList.pushBack(value) ⇒ <code>ForwardNode</code>
> Push a new node with value `value` to the back of the list


| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<br><a name="CircularSinglyLinkedList+insertAfter"></a>

## circularSinglyLinkedList.insertAfter(value, mark) ⇒ <code>ForwardNode</code> \| <code>null</code>
> Insert a new node with value `value` immediately after `mark`
> 
> If `mark` is not an element of the list, the list is not modified
> 
> `mark` must not be null


| Param | Type |
| --- | --- |
| value | <code>any</code> | 
| mark | <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+insertBefore"></a>

## circularSinglyLinkedList.insertBefore(value, mark) ⇒ <code>ForwardNode</code> \| <code>null</code>
> Insert a new node with value `value` immediately before `mark`
> 
> If `mark` is not an element of the list, the list is not modified
> 
> `mark` must not be null


| Param | Type |
| --- | --- |
| value | <code>any</code> | 
| mark | <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+pushBackList"></a>

## circularSinglyLinkedList.pushBackList(other)
> Insert a copy of another list at the back of the caller list
> 
> The lists may be the same, but must not be null


| Param | Type |
| --- | --- |
| other | [<code>CircularSinglyLinkedList</code>](#CircularSinglyLinkedList) | 


<br><a name="CircularSinglyLinkedList+pushFrontList"></a>

## circularSinglyLinkedList.pushFrontList(other)
> Insert a copy of another list at the front of the caller list
> 
> The lists may be the same, but must not be null


| Param | Type |
| --- | --- |
| other | [<code>CircularSinglyLinkedList</code>](#CircularSinglyLinkedList) | 


<br><a name="CircularSinglyLinkedList+size"></a>

## circularSinglyLinkedList.size() ⇒ <code>number</code>
> The current size of the list


<br><a name="CircularSinglyLinkedList+next"></a>

## circularSinglyLinkedList.next(node) ⇒ <code>Node</code> \| <code>null</code>
> Returns the next list node, if extant; else, null


| Param | Type |
| --- | --- |
| node | <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+prev"></a>

## circularSinglyLinkedList.prev(node) ⇒ <code>Node</code> \| <code>null</code>
> Returns the previous list node, if extant; else, null


| Param | Type |
| --- | --- |
| node | <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+remove"></a>

## circularSinglyLinkedList.remove(node) ⇒ <code>Node</code> \| <code>null</code>
> Remove a given node from the list

**Returns**: <code>Node</code> \| <code>null</code> - The removed node  

| Param | Type |
| --- | --- |
| node | <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+pop"></a>

## circularSinglyLinkedList.pop(node) ⇒ <code>Node</code> \| <code>null</code>
> Remove the last node from the list

**Returns**: <code>Node</code> \| <code>null</code> - The removed node  

| Param | Type |
| --- | --- |
| node | <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+moveAfter"></a>

## circularSinglyLinkedList.moveAfter(node, mark) ⇒ <code>ForwardNode</code>
> Move a given node to its new position after `mark`
> 
> If either the given node or mark are not an element of the list; node == mark; or mark.next == node, the list is not modified
> 
> Both the node and mark must not be null


| Param | Type |
| --- | --- |
| node | <code>ForwardNode</code> | 
| mark | <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+moveBefore"></a>

## circularSinglyLinkedList.moveBefore(node, mark) ⇒ <code>ForwardNode</code>
> Move a given node to its new position before `mark`
> 
> If either the given node or mark are not an element of the list; node == mark; or node.next == mark, the list is not modified
> 
> Both the node and mark must not be null


| Param | Type |
| --- | --- |
| node | <code>ForwardNode</code> | 
| mark | <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+pushFront"></a>

## circularSinglyLinkedList.pushFront(value) ⇒ <code>ForwardNode</code>
> Push a new node with value `value` to the front of the list


| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<br><a name="CircularSinglyLinkedList+pushBack"></a>

## circularSinglyLinkedList.pushBack(value) ⇒ <code>ForwardNode</code>
> Push a new node with value `value` to the back of the list


| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<br><a name="CircularSinglyLinkedList+insertAfter"></a>

## circularSinglyLinkedList.insertAfter(value, mark) ⇒ <code>ForwardNode</code> \| <code>null</code>
> Insert a new node with value `value` immediately after `mark`
> 
> If `mark` is not an element of the list, the list is not modified
> 
> `mark` must not be null


| Param | Type |
| --- | --- |
| value | <code>any</code> | 
| mark | <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+insertBefore"></a>

## circularSinglyLinkedList.insertBefore(value, mark) ⇒ <code>ForwardNode</code> \| <code>null</code>
> Insert a new node with value `value` immediately before `mark`
> 
> If `mark` is not an element of the list, the list is not modified
> 
> `mark` must not be null


| Param | Type |
| --- | --- |
| value | <code>any</code> | 
| mark | <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+pushBackList"></a>

## circularSinglyLinkedList.pushBackList(other)
> Insert a copy of another list at the back of the caller list
> 
> The lists may be the same, but must not be null


| Param | Type |
| --- | --- |
| other | [<code>CircularSinglyLinkedList</code>](#CircularSinglyLinkedList) | 


<br><a name="CircularSinglyLinkedList+pushFrontList"></a>

## circularSinglyLinkedList.pushFrontList(other)
> Insert a copy of another list at the front of the caller list
> 
> The lists may be the same, but must not be null


| Param | Type |
| --- | --- |
| other | [<code>CircularSinglyLinkedList</code>](#CircularSinglyLinkedList) | 


<br><a name="CircularSinglyLinkedList.create"></a>

## CircularSinglyLinkedList.create() ⇒ [<code>CircularSinglyLinkedList</code>](#CircularSinglyLinkedList)
> Instantiate an empty circular singly linked list


<br><a name="CircularSinglyLinkedList.create"></a>

## CircularSinglyLinkedList.create() ⇒ [<code>CircularSinglyLinkedList</code>](#CircularSinglyLinkedList)
> Instantiate an empty circular singly linked list


<br><a name="CircularDoublyLinkedList"></a>

# CircularDoublyLinkedList

* [CircularDoublyLinkedList](#CircularDoublyLinkedList)
    * [new CircularDoublyLinkedList()](#new_CircularDoublyLinkedList_new)
    * [new CircularDoublyLinkedList()](#new_CircularDoublyLinkedList_new)
    * _instance_
        * [.sentinel](#CircularDoublyLinkedList+sentinel)
        * [.length](#CircularDoublyLinkedList+length)
        * [.sentinel](#CircularDoublyLinkedList+sentinel)
        * [.length](#CircularDoublyLinkedList+length)
        * [.size()](#CircularDoublyLinkedList+size) ⇒ <code>number</code>
        * [.next(node)](#CircularDoublyLinkedList+next) ⇒ <code>Node</code> \| <code>null</code>
        * [.prev(node)](#CircularDoublyLinkedList+prev) ⇒ <code>Node</code> \| <code>null</code>
        * [.head()](#CircularDoublyLinkedList+head) ⇒ <code>Node</code> \| <code>null</code>
        * [.tail()](#CircularDoublyLinkedList+tail) ⇒ <code>Node</code> \| <code>null</code>
        * [.insert(node, at)](#CircularDoublyLinkedList+insert) ⇒ <code>Node</code>
        * [.remove(node)](#CircularDoublyLinkedList+remove) ⇒ <code>Node</code>
        * [.pop(node)](#CircularDoublyLinkedList+pop) ⇒ <code>Node</code>
        * [.move(node, at)](#CircularDoublyLinkedList+move) ⇒ <code>Node</code>
        * [.pushFront(value)](#CircularDoublyLinkedList+pushFront) ⇒ <code>Node</code>
        * [.pushBack(value)](#CircularDoublyLinkedList+pushBack) ⇒ <code>Node</code>
        * [.insertBefore(value, mark)](#CircularDoublyLinkedList+insertBefore) ⇒ <code>Node</code>
        * [.insertAfter(value, mark)](#CircularDoublyLinkedList+insertAfter) ⇒ <code>Node</code>
        * [.moveToFront(node)](#CircularDoublyLinkedList+moveToFront) ⇒ <code>Node</code>
        * [.moveToBack(node)](#CircularDoublyLinkedList+moveToBack) ⇒ <code>Node</code>
        * [.moveBefore(node, mark)](#CircularDoublyLinkedList+moveBefore) ⇒ <code>Node</code>
        * [.moveAfter(node, mark)](#CircularDoublyLinkedList+moveAfter) ⇒ <code>Node</code>
        * [.insertValue(value, at)](#CircularDoublyLinkedList+insertValue) ⇒ <code>Node</code>
        * [.pushBackList(other)](#CircularDoublyLinkedList+pushBackList)
        * [.pushFrontList(other)](#CircularDoublyLinkedList+pushFrontList)
        * [.size()](#CircularDoublyLinkedList+size) ⇒ <code>number</code>
        * [.next(node)](#CircularDoublyLinkedList+next) ⇒ <code>Node</code> \| <code>null</code>
        * [.prev(node)](#CircularDoublyLinkedList+prev) ⇒ <code>Node</code> \| <code>null</code>
        * [.head()](#CircularDoublyLinkedList+head) ⇒ <code>Node</code> \| <code>null</code>
        * [.tail()](#CircularDoublyLinkedList+tail) ⇒ <code>Node</code> \| <code>null</code>
        * [.insert(node, at)](#CircularDoublyLinkedList+insert) ⇒ <code>Node</code>
        * [.remove(node)](#CircularDoublyLinkedList+remove) ⇒ <code>Node</code>
        * [.pop(node)](#CircularDoublyLinkedList+pop) ⇒ <code>Node</code>
        * [.move(node, at)](#CircularDoublyLinkedList+move) ⇒ <code>Node</code>
        * [.pushFront(value)](#CircularDoublyLinkedList+pushFront) ⇒ <code>Node</code>
        * [.pushBack(value)](#CircularDoublyLinkedList+pushBack) ⇒ <code>Node</code>
        * [.insertBefore(value, mark)](#CircularDoublyLinkedList+insertBefore) ⇒ <code>Node</code>
        * [.insertAfter(value, mark)](#CircularDoublyLinkedList+insertAfter) ⇒ <code>Node</code>
        * [.moveToFront(node)](#CircularDoublyLinkedList+moveToFront) ⇒ <code>Node</code>
        * [.moveToBack(node)](#CircularDoublyLinkedList+moveToBack) ⇒ <code>Node</code>
        * [.moveBefore(node, mark)](#CircularDoublyLinkedList+moveBefore) ⇒ <code>Node</code>
        * [.moveAfter(node, mark)](#CircularDoublyLinkedList+moveAfter) ⇒ <code>Node</code>
        * [.insertValue(value, at)](#CircularDoublyLinkedList+insertValue) ⇒ <code>Node</code>
        * [.pushBackList(other)](#CircularDoublyLinkedList+pushBackList)
        * [.pushFrontList(other)](#CircularDoublyLinkedList+pushFrontList)
    * _static_
        * [.create()](#CircularDoublyLinkedList.create) ⇒ [<code>CircularDoublyLinkedList</code>](#CircularDoublyLinkedList)
        * [.create()](#CircularDoublyLinkedList.create) ⇒ [<code>CircularDoublyLinkedList</code>](#CircularDoublyLinkedList)


<br><a name="new_CircularDoublyLinkedList_new"></a>

## new CircularDoublyLinkedList()
> Implements a circular doubly linked list as a ring, such that
> the sentinel node is both the next node of the tail, and the previous node
> of the head


<br><a name="new_CircularDoublyLinkedList_new"></a>

## new CircularDoublyLinkedList()
> Implements a circular doubly linked list as a ring, such that
> the sentinel node is both the next node of the tail, and the previous node
> of the head


<br><a name="CircularDoublyLinkedList+sentinel"></a>

## circularDoublyLinkedList.sentinel
> The sentinel terminator node

**Properties**

| Type |
| --- |
| <code>Sentinel</code> | 


<br><a name="CircularDoublyLinkedList+length"></a>

## circularDoublyLinkedList.length
> The list length, sans the sentinel terminator

**Properties**

| Type |
| --- |
| <code>number</code> | 


<br><a name="CircularDoublyLinkedList+sentinel"></a>

## circularDoublyLinkedList.sentinel
> The sentinel terminator node

**Properties**

| Type |
| --- |
| <code>Sentinel</code> | 


<br><a name="CircularDoublyLinkedList+length"></a>

## circularDoublyLinkedList.length
> The list length, sans the sentinel terminator

**Properties**

| Type |
| --- |
| <code>number</code> | 


<br><a name="CircularDoublyLinkedList+size"></a>

## circularDoublyLinkedList.size() ⇒ <code>number</code>
> The current size of the list, sans the sentinel node


<br><a name="CircularDoublyLinkedList+next"></a>

## circularDoublyLinkedList.next(node) ⇒ <code>Node</code> \| <code>null</code>
> Returns the next list node, if extant; else, null


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+prev"></a>

## circularDoublyLinkedList.prev(node) ⇒ <code>Node</code> \| <code>null</code>
> Returns the previous list node, if extant; else, null


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+head"></a>

## circularDoublyLinkedList.head() ⇒ <code>Node</code> \| <code>null</code>
> Returns the head node of the list or null if the list is empty


<br><a name="CircularDoublyLinkedList+tail"></a>

## circularDoublyLinkedList.tail() ⇒ <code>Node</code> \| <code>null</code>
> Returns the tail node of the list or null if the list is empty


<br><a name="CircularDoublyLinkedList+insert"></a>

## circularDoublyLinkedList.insert(node, at) ⇒ <code>Node</code>
> Insert a new node after a given node `at`


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 
| at | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+remove"></a>

## circularDoublyLinkedList.remove(node) ⇒ <code>Node</code>
> Remove a given node from the list

**Returns**: <code>Node</code> - The removed node  

| Param | Type |
| --- | --- |
| node | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+pop"></a>

## circularDoublyLinkedList.pop(node) ⇒ <code>Node</code>
> Remove the last node from the list

**Returns**: <code>Node</code> - The removed node  

| Param | Type |
| --- | --- |
| node | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+move"></a>

## circularDoublyLinkedList.move(node, at) ⇒ <code>Node</code>
> Move given node to `at`


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 
| at | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+pushFront"></a>

## circularDoublyLinkedList.pushFront(value) ⇒ <code>Node</code>
> Push a new node with value `value` to the front of the list


| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<br><a name="CircularDoublyLinkedList+pushBack"></a>

## circularDoublyLinkedList.pushBack(value) ⇒ <code>Node</code>
> Push a new node with value `value` to the back of the list


| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<br><a name="CircularDoublyLinkedList+insertBefore"></a>

## circularDoublyLinkedList.insertBefore(value, mark) ⇒ <code>Node</code>
> Insert a new node with value `value` immediately before `mark`
> 
> If `mark` is not an element of the list, the list is not modified
> 
> `mark` must not be null


| Param | Type |
| --- | --- |
| value | <code>any</code> | 
| mark | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+insertAfter"></a>

## circularDoublyLinkedList.insertAfter(value, mark) ⇒ <code>Node</code>
> Insert a new node with value `value` immediately after `mark`
> 
> If `mark` is not an element of the list, the list is not modified
> 
> `mark` must not be null


| Param | Type |
| --- | --- |
| value | <code>any</code> | 
| mark | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+moveToFront"></a>

## circularDoublyLinkedList.moveToFront(node) ⇒ <code>Node</code>
> Move a node to the front of the list
> 
> If the given node is not an element of the list, the list is not modified
> 
> The given node must not be null


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+moveToBack"></a>

## circularDoublyLinkedList.moveToBack(node) ⇒ <code>Node</code>
> Move a node to the back of the list
> 
> If the given node is not an element of the list, the list is not modified
> 
> The given node must not be null


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+moveBefore"></a>

## circularDoublyLinkedList.moveBefore(node, mark) ⇒ <code>Node</code>
> Move a given node to its new position before `mark`
> 
> If either the given node or mark are not an element of the list, or node == mark, the list is not modified
> 
> Both the node and mark must not be null


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 
| mark | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+moveAfter"></a>

## circularDoublyLinkedList.moveAfter(node, mark) ⇒ <code>Node</code>
> Move a given node to its new position after `mark`
> 
> If either the given node or mark are not an element of the list, or node == mark, the list is not modified
> 
> Both the node and mark must not be null


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 
| mark | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+insertValue"></a>

## circularDoublyLinkedList.insertValue(value, at) ⇒ <code>Node</code>
> Convenience for inserting a given value into a new node after a given node `at`


| Param | Type |
| --- | --- |
| value | <code>any</code> | 
| at | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+pushBackList"></a>

## circularDoublyLinkedList.pushBackList(other)
> Insert a copy of another list at the back of the caller list
> 
> The lists may be the same, but must not be null


| Param | Type |
| --- | --- |
| other | [<code>CircularDoublyLinkedList</code>](#CircularDoublyLinkedList) | 


<br><a name="CircularDoublyLinkedList+pushFrontList"></a>

## circularDoublyLinkedList.pushFrontList(other)
> Insert a copy of another list at the front of the caller list
> 
> The lists may be the same, but must not be null


| Param | Type |
| --- | --- |
| other | [<code>CircularDoublyLinkedList</code>](#CircularDoublyLinkedList) | 


<br><a name="CircularDoublyLinkedList+size"></a>

## circularDoublyLinkedList.size() ⇒ <code>number</code>
> The current size of the list, sans the sentinel node


<br><a name="CircularDoublyLinkedList+next"></a>

## circularDoublyLinkedList.next(node) ⇒ <code>Node</code> \| <code>null</code>
> Returns the next list node, if extant; else, null


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+prev"></a>

## circularDoublyLinkedList.prev(node) ⇒ <code>Node</code> \| <code>null</code>
> Returns the previous list node, if extant; else, null


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+head"></a>

## circularDoublyLinkedList.head() ⇒ <code>Node</code> \| <code>null</code>
> Returns the head node of the list or null if the list is empty


<br><a name="CircularDoublyLinkedList+tail"></a>

## circularDoublyLinkedList.tail() ⇒ <code>Node</code> \| <code>null</code>
> Returns the tail node of the list or null if the list is empty


<br><a name="CircularDoublyLinkedList+insert"></a>

## circularDoublyLinkedList.insert(node, at) ⇒ <code>Node</code>
> Insert a new node after a given node `at`


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 
| at | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+remove"></a>

## circularDoublyLinkedList.remove(node) ⇒ <code>Node</code>
> Remove a given node from the list

**Returns**: <code>Node</code> - The removed node  

| Param | Type |
| --- | --- |
| node | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+pop"></a>

## circularDoublyLinkedList.pop(node) ⇒ <code>Node</code>
> Remove the last node from the list

**Returns**: <code>Node</code> - The removed node  

| Param | Type |
| --- | --- |
| node | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+move"></a>

## circularDoublyLinkedList.move(node, at) ⇒ <code>Node</code>
> Move given node to `at`


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 
| at | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+pushFront"></a>

## circularDoublyLinkedList.pushFront(value) ⇒ <code>Node</code>
> Push a new node with value `value` to the front of the list


| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<br><a name="CircularDoublyLinkedList+pushBack"></a>

## circularDoublyLinkedList.pushBack(value) ⇒ <code>Node</code>
> Push a new node with value `value` to the back of the list


| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<br><a name="CircularDoublyLinkedList+insertBefore"></a>

## circularDoublyLinkedList.insertBefore(value, mark) ⇒ <code>Node</code>
> Insert a new node with value `value` immediately before `mark`
> 
> If `mark` is not an element of the list, the list is not modified
> 
> `mark` must not be null


| Param | Type |
| --- | --- |
| value | <code>any</code> | 
| mark | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+insertAfter"></a>

## circularDoublyLinkedList.insertAfter(value, mark) ⇒ <code>Node</code>
> Insert a new node with value `value` immediately after `mark`
> 
> If `mark` is not an element of the list, the list is not modified
> 
> `mark` must not be null


| Param | Type |
| --- | --- |
| value | <code>any</code> | 
| mark | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+moveToFront"></a>

## circularDoublyLinkedList.moveToFront(node) ⇒ <code>Node</code>
> Move a node to the front of the list
> 
> If the given node is not an element of the list, the list is not modified
> 
> The given node must not be null


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+moveToBack"></a>

## circularDoublyLinkedList.moveToBack(node) ⇒ <code>Node</code>
> Move a node to the back of the list
> 
> If the given node is not an element of the list, the list is not modified
> 
> The given node must not be null


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+moveBefore"></a>

## circularDoublyLinkedList.moveBefore(node, mark) ⇒ <code>Node</code>
> Move a given node to its new position before `mark`
> 
> If either the given node or mark are not an element of the list, or node == mark, the list is not modified
> 
> Both the node and mark must not be null


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 
| mark | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+moveAfter"></a>

## circularDoublyLinkedList.moveAfter(node, mark) ⇒ <code>Node</code>
> Move a given node to its new position after `mark`
> 
> If either the given node or mark are not an element of the list, or node == mark, the list is not modified
> 
> Both the node and mark must not be null


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 
| mark | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+insertValue"></a>

## circularDoublyLinkedList.insertValue(value, at) ⇒ <code>Node</code>
> Convenience for inserting a given value into a new node after a given node `at`


| Param | Type |
| --- | --- |
| value | <code>any</code> | 
| at | <code>Node</code> | 


<br><a name="CircularDoublyLinkedList+pushBackList"></a>

## circularDoublyLinkedList.pushBackList(other)
> Insert a copy of another list at the back of the caller list
> 
> The lists may be the same, but must not be null


| Param | Type |
| --- | --- |
| other | [<code>CircularDoublyLinkedList</code>](#CircularDoublyLinkedList) | 


<br><a name="CircularDoublyLinkedList+pushFrontList"></a>

## circularDoublyLinkedList.pushFrontList(other)
> Insert a copy of another list at the front of the caller list
> 
> The lists may be the same, but must not be null


| Param | Type |
| --- | --- |
| other | [<code>CircularDoublyLinkedList</code>](#CircularDoublyLinkedList) | 


<br><a name="CircularDoublyLinkedList.create"></a>

## CircularDoublyLinkedList.create() ⇒ [<code>CircularDoublyLinkedList</code>](#CircularDoublyLinkedList)
> Instantiate an empty circular doubly linked list


<br><a name="CircularDoublyLinkedList.create"></a>

## CircularDoublyLinkedList.create() ⇒ [<code>CircularDoublyLinkedList</code>](#CircularDoublyLinkedList)
> Instantiate an empty circular doubly linked list


<br><a name="CircularSinglyLinkedList"></a>

# CircularSinglyLinkedList

* [CircularSinglyLinkedList](#CircularSinglyLinkedList)
    * [new CircularSinglyLinkedList()](#new_CircularSinglyLinkedList_new)
    * [new CircularSinglyLinkedList()](#new_CircularSinglyLinkedList_new)
    * _instance_
        * [.head](#CircularSinglyLinkedList+head)
        * [.length](#CircularSinglyLinkedList+length)
        * [.head](#CircularSinglyLinkedList+head)
        * [.length](#CircularSinglyLinkedList+length)
        * [.size()](#CircularSinglyLinkedList+size) ⇒ <code>number</code>
        * [.next(node)](#CircularSinglyLinkedList+next) ⇒ <code>Node</code> \| <code>null</code>
        * [.prev(node)](#CircularSinglyLinkedList+prev) ⇒ <code>Node</code> \| <code>null</code>
        * [.remove(node)](#CircularSinglyLinkedList+remove) ⇒ <code>Node</code> \| <code>null</code>
        * [.pop(node)](#CircularSinglyLinkedList+pop) ⇒ <code>Node</code> \| <code>null</code>
        * [.moveAfter(node, mark)](#CircularSinglyLinkedList+moveAfter) ⇒ <code>ForwardNode</code>
        * [.moveBefore(node, mark)](#CircularSinglyLinkedList+moveBefore) ⇒ <code>ForwardNode</code>
        * [.pushFront(value)](#CircularSinglyLinkedList+pushFront) ⇒ <code>ForwardNode</code>
        * [.pushBack(value)](#CircularSinglyLinkedList+pushBack) ⇒ <code>ForwardNode</code>
        * [.insertAfter(value, mark)](#CircularSinglyLinkedList+insertAfter) ⇒ <code>ForwardNode</code> \| <code>null</code>
        * [.insertBefore(value, mark)](#CircularSinglyLinkedList+insertBefore) ⇒ <code>ForwardNode</code> \| <code>null</code>
        * [.pushBackList(other)](#CircularSinglyLinkedList+pushBackList)
        * [.pushFrontList(other)](#CircularSinglyLinkedList+pushFrontList)
        * [.size()](#CircularSinglyLinkedList+size) ⇒ <code>number</code>
        * [.next(node)](#CircularSinglyLinkedList+next) ⇒ <code>Node</code> \| <code>null</code>
        * [.prev(node)](#CircularSinglyLinkedList+prev) ⇒ <code>Node</code> \| <code>null</code>
        * [.remove(node)](#CircularSinglyLinkedList+remove) ⇒ <code>Node</code> \| <code>null</code>
        * [.pop(node)](#CircularSinglyLinkedList+pop) ⇒ <code>Node</code> \| <code>null</code>
        * [.moveAfter(node, mark)](#CircularSinglyLinkedList+moveAfter) ⇒ <code>ForwardNode</code>
        * [.moveBefore(node, mark)](#CircularSinglyLinkedList+moveBefore) ⇒ <code>ForwardNode</code>
        * [.pushFront(value)](#CircularSinglyLinkedList+pushFront) ⇒ <code>ForwardNode</code>
        * [.pushBack(value)](#CircularSinglyLinkedList+pushBack) ⇒ <code>ForwardNode</code>
        * [.insertAfter(value, mark)](#CircularSinglyLinkedList+insertAfter) ⇒ <code>ForwardNode</code> \| <code>null</code>
        * [.insertBefore(value, mark)](#CircularSinglyLinkedList+insertBefore) ⇒ <code>ForwardNode</code> \| <code>null</code>
        * [.pushBackList(other)](#CircularSinglyLinkedList+pushBackList)
        * [.pushFrontList(other)](#CircularSinglyLinkedList+pushFrontList)
    * _static_
        * [.create()](#CircularSinglyLinkedList.create) ⇒ [<code>CircularSinglyLinkedList</code>](#CircularSinglyLinkedList)
        * [.create()](#CircularSinglyLinkedList.create) ⇒ [<code>CircularSinglyLinkedList</code>](#CircularSinglyLinkedList)


<br><a name="new_CircularSinglyLinkedList_new"></a>

## new CircularSinglyLinkedList()
> Implements a circular singular (linear) linked list


<br><a name="new_CircularSinglyLinkedList_new"></a>

## new CircularSinglyLinkedList()
> Implements a circular singular (linear) linked list


<br><a name="CircularSinglyLinkedList+head"></a>

## circularSinglyLinkedList.head
> The head node; implemented internally as a ring

**Properties**

| Type |
| --- |
| <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+length"></a>

## circularSinglyLinkedList.length
> The current size of the list

**Properties**

| Type |
| --- |
| <code>number</code> | 


<br><a name="CircularSinglyLinkedList+head"></a>

## circularSinglyLinkedList.head
> The head node; implemented internally as a ring

**Properties**

| Type |
| --- |
| <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+length"></a>

## circularSinglyLinkedList.length
> The current size of the list

**Properties**

| Type |
| --- |
| <code>number</code> | 


<br><a name="CircularSinglyLinkedList+size"></a>

## circularSinglyLinkedList.size() ⇒ <code>number</code>
> The current size of the list


<br><a name="CircularSinglyLinkedList+next"></a>

## circularSinglyLinkedList.next(node) ⇒ <code>Node</code> \| <code>null</code>
> Returns the next list node, if extant; else, null


| Param | Type |
| --- | --- |
| node | <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+prev"></a>

## circularSinglyLinkedList.prev(node) ⇒ <code>Node</code> \| <code>null</code>
> Returns the previous list node, if extant; else, null


| Param | Type |
| --- | --- |
| node | <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+remove"></a>

## circularSinglyLinkedList.remove(node) ⇒ <code>Node</code> \| <code>null</code>
> Remove a given node from the list

**Returns**: <code>Node</code> \| <code>null</code> - The removed node  

| Param | Type |
| --- | --- |
| node | <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+pop"></a>

## circularSinglyLinkedList.pop(node) ⇒ <code>Node</code> \| <code>null</code>
> Remove the last node from the list

**Returns**: <code>Node</code> \| <code>null</code> - The removed node  

| Param | Type |
| --- | --- |
| node | <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+moveAfter"></a>

## circularSinglyLinkedList.moveAfter(node, mark) ⇒ <code>ForwardNode</code>
> Move a given node to its new position after `mark`
> 
> If either the given node or mark are not an element of the list; node == mark; or mark.next == node, the list is not modified
> 
> Both the node and mark must not be null


| Param | Type |
| --- | --- |
| node | <code>ForwardNode</code> | 
| mark | <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+moveBefore"></a>

## circularSinglyLinkedList.moveBefore(node, mark) ⇒ <code>ForwardNode</code>
> Move a given node to its new position before `mark`
> 
> If either the given node or mark are not an element of the list; node == mark; or node.next == mark, the list is not modified
> 
> Both the node and mark must not be null


| Param | Type |
| --- | --- |
| node | <code>ForwardNode</code> | 
| mark | <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+pushFront"></a>

## circularSinglyLinkedList.pushFront(value) ⇒ <code>ForwardNode</code>
> Push a new node with value `value` to the front of the list


| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<br><a name="CircularSinglyLinkedList+pushBack"></a>

## circularSinglyLinkedList.pushBack(value) ⇒ <code>ForwardNode</code>
> Push a new node with value `value` to the back of the list


| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<br><a name="CircularSinglyLinkedList+insertAfter"></a>

## circularSinglyLinkedList.insertAfter(value, mark) ⇒ <code>ForwardNode</code> \| <code>null</code>
> Insert a new node with value `value` immediately after `mark`
> 
> If `mark` is not an element of the list, the list is not modified
> 
> `mark` must not be null


| Param | Type |
| --- | --- |
| value | <code>any</code> | 
| mark | <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+insertBefore"></a>

## circularSinglyLinkedList.insertBefore(value, mark) ⇒ <code>ForwardNode</code> \| <code>null</code>
> Insert a new node with value `value` immediately before `mark`
> 
> If `mark` is not an element of the list, the list is not modified
> 
> `mark` must not be null


| Param | Type |
| --- | --- |
| value | <code>any</code> | 
| mark | <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+pushBackList"></a>

## circularSinglyLinkedList.pushBackList(other)
> Insert a copy of another list at the back of the caller list
> 
> The lists may be the same, but must not be null


| Param | Type |
| --- | --- |
| other | [<code>CircularSinglyLinkedList</code>](#CircularSinglyLinkedList) | 


<br><a name="CircularSinglyLinkedList+pushFrontList"></a>

## circularSinglyLinkedList.pushFrontList(other)
> Insert a copy of another list at the front of the caller list
> 
> The lists may be the same, but must not be null


| Param | Type |
| --- | --- |
| other | [<code>CircularSinglyLinkedList</code>](#CircularSinglyLinkedList) | 


<br><a name="CircularSinglyLinkedList+size"></a>

## circularSinglyLinkedList.size() ⇒ <code>number</code>
> The current size of the list


<br><a name="CircularSinglyLinkedList+next"></a>

## circularSinglyLinkedList.next(node) ⇒ <code>Node</code> \| <code>null</code>
> Returns the next list node, if extant; else, null


| Param | Type |
| --- | --- |
| node | <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+prev"></a>

## circularSinglyLinkedList.prev(node) ⇒ <code>Node</code> \| <code>null</code>
> Returns the previous list node, if extant; else, null


| Param | Type |
| --- | --- |
| node | <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+remove"></a>

## circularSinglyLinkedList.remove(node) ⇒ <code>Node</code> \| <code>null</code>
> Remove a given node from the list

**Returns**: <code>Node</code> \| <code>null</code> - The removed node  

| Param | Type |
| --- | --- |
| node | <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+pop"></a>

## circularSinglyLinkedList.pop(node) ⇒ <code>Node</code> \| <code>null</code>
> Remove the last node from the list

**Returns**: <code>Node</code> \| <code>null</code> - The removed node  

| Param | Type |
| --- | --- |
| node | <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+moveAfter"></a>

## circularSinglyLinkedList.moveAfter(node, mark) ⇒ <code>ForwardNode</code>
> Move a given node to its new position after `mark`
> 
> If either the given node or mark are not an element of the list; node == mark; or mark.next == node, the list is not modified
> 
> Both the node and mark must not be null


| Param | Type |
| --- | --- |
| node | <code>ForwardNode</code> | 
| mark | <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+moveBefore"></a>

## circularSinglyLinkedList.moveBefore(node, mark) ⇒ <code>ForwardNode</code>
> Move a given node to its new position before `mark`
> 
> If either the given node or mark are not an element of the list; node == mark; or node.next == mark, the list is not modified
> 
> Both the node and mark must not be null


| Param | Type |
| --- | --- |
| node | <code>ForwardNode</code> | 
| mark | <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+pushFront"></a>

## circularSinglyLinkedList.pushFront(value) ⇒ <code>ForwardNode</code>
> Push a new node with value `value` to the front of the list


| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<br><a name="CircularSinglyLinkedList+pushBack"></a>

## circularSinglyLinkedList.pushBack(value) ⇒ <code>ForwardNode</code>
> Push a new node with value `value` to the back of the list


| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<br><a name="CircularSinglyLinkedList+insertAfter"></a>

## circularSinglyLinkedList.insertAfter(value, mark) ⇒ <code>ForwardNode</code> \| <code>null</code>
> Insert a new node with value `value` immediately after `mark`
> 
> If `mark` is not an element of the list, the list is not modified
> 
> `mark` must not be null


| Param | Type |
| --- | --- |
| value | <code>any</code> | 
| mark | <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+insertBefore"></a>

## circularSinglyLinkedList.insertBefore(value, mark) ⇒ <code>ForwardNode</code> \| <code>null</code>
> Insert a new node with value `value` immediately before `mark`
> 
> If `mark` is not an element of the list, the list is not modified
> 
> `mark` must not be null


| Param | Type |
| --- | --- |
| value | <code>any</code> | 
| mark | <code>ForwardNode</code> | 


<br><a name="CircularSinglyLinkedList+pushBackList"></a>

## circularSinglyLinkedList.pushBackList(other)
> Insert a copy of another list at the back of the caller list
> 
> The lists may be the same, but must not be null


| Param | Type |
| --- | --- |
| other | [<code>CircularSinglyLinkedList</code>](#CircularSinglyLinkedList) | 


<br><a name="CircularSinglyLinkedList+pushFrontList"></a>

## circularSinglyLinkedList.pushFrontList(other)
> Insert a copy of another list at the front of the caller list
> 
> The lists may be the same, but must not be null


| Param | Type |
| --- | --- |
| other | [<code>CircularSinglyLinkedList</code>](#CircularSinglyLinkedList) | 


<br><a name="CircularSinglyLinkedList.create"></a>

## CircularSinglyLinkedList.create() ⇒ [<code>CircularSinglyLinkedList</code>](#CircularSinglyLinkedList)
> Instantiate an empty circular singly linked list


<br><a name="CircularSinglyLinkedList.create"></a>

## CircularSinglyLinkedList.create() ⇒ [<code>CircularSinglyLinkedList</code>](#CircularSinglyLinkedList)
> Instantiate an empty circular singly linked list

