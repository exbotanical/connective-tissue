export interface InitializedSentinel<T> {
  next: Node<T> | InitializedSentinel<T>
  prev: Node<T> | InitializedSentinel<T>
}

/**
 * Implements a ring data structure for terminating a bi-directional list
 * @public
 */
export class Sentinel {
  constructor(public next = null, public prev = null) {}
}

/**
 * Implements a bi-directional node.
 * `Node` implements as a member a pointer to the list to which it belongs
 *
 * @param value - A value with which to instantiate the node
 * @public
 */
export class Node<T> {
  constructor(
    public value: T | null = null,
    public next: Node<T> | null = null,
    public prev: Node<T> | null = null,
    public list: CircularDoublyLinkedList<T> | null = null,
  ) {}
}

/**
 * Implements a circular doubly linked list as a ring, such that
 * the sentinel node is both the next node of the tail, and the previous node of the head.
 *
 * @public
 */
export class CircularDoublyLinkedList<T> {
  /**
   * The sentinel terminator node.
   */
  sentinel: InitializedSentinel<T>

  /**
   * The list length, sans the sentinel terminator.
   *
   * @internal
   */
  private length

  constructor() {
    this.sentinel = new Sentinel() as unknown as InitializedSentinel<T>
    this.sentinel.next = this.sentinel
    this.sentinel.prev = this.sentinel

    this.length = 0
  }

  /**
   * Instantiate an empty circular doubly linked list
   */
  static create() {
    return new CircularDoublyLinkedList()
  }

  /**
   * The current size of the list, sans the sentinel node
   */
  size() {
    return this.length
  }

  /**
   * Returns the next list node, if extant; else, null
   *
   * @param node - A valid node, which must be a member of this list (return null if the given node is not a member).
   * If this constraint is satisfied, return the next node from the given node.
   */
  next(node: Node<T> | null) {
    if (!node) {
      return null
    }

    if (node.list !== this) {
      return null
    }

    const p = node.next

    if (p && node.list != null && p != node.list.sentinel) {
      return p as Node<T>
    }

    return null
  }

  /**
   * Returns the previous list node, if extant; else, null
   *
   * @param node - A node, which must be a member of this list (return null if the given node is null or not a member).
   * If this constraint is satisfied, return the previous node relative to the given node.
   */
  prev(node: Node<T> | null) {
    if (!node || node.list !== this) {
      return null
    }

    const p = node.prev

    if (p && node.list != null && p != node.list.sentinel) {
      return p as Node<T>
    }

    return null
  }

  /**
   * Returns the head node of the list or null if the list is empty
   */
  head() {
    if (!this.length) {
      return null
    }

    // we already checked the length; thus, the pointer is an actual node
    return this.sentinel.next as Node<T>
  }

  /**
   * Returns the tail node of the list or null if the list is empty
   */
  tail() {
    if (!this.length) {
      return null
    }

    return this.sentinel.prev as Node<T>
  }

  /**
   * Insert a new node after a given node `at`.
   *
   * @param node - A node to insert into the list.
   * @param at - A node in the list after which `node` will be inserted.
   */
  insert(node: Node<T>, at: Node<T>) {
    // bypass if sentinel, as it is used internally where length is not yet incremented and sentinel does not have a list ref
    if (at !== this.sentinel) {
      if (this.length < 1) {
        throw Error('Cannot insert into an empty list.')
      }

      if ((at as Node<T>).list !== this) {
        throw Error('Provided node `at` is not a member of this list.')
      }
    }

    if (!at.next) {
      throw Error(
        'Provided node `at` is invalid. It must have a `next` node pointer.',
      )
    }

    node.prev = at
    node.next = at.next
    node.prev.next = node

    node.next.prev = node

    node.list = this

    this.length++

    return node
  }

  /**
   * Remove a given node from the list
   *
   * @param node - A node to remove from the list
   */
  remove(node: Node<T>) {
    if (node.list === this && node.next && node.prev) {
      node.prev.next = node.next
      node.next.prev = node.prev

      node.next = null
      node.prev = null
      node.list = null

      this.length--
    }

    return node
  }

  /**
   * Remove the last node from the list
   */
  pop() {
    const tail = this.tail()

    if (!tail) {
      return tail
    }

    return this.remove(tail)
  }

  /**
   * Move given node to `at`
   *
   * @param node - A node in the list to move
   * @param at - A node in the list after which to move `node`
   *
   */
  move(node: Node<T>, at: Node<T>) {
    if (node.list !== this || !node.prev || !node.next) {
      return null
    }

    if (node === at) {
      return node
    }

    node.prev.next = node.next
    node.next.prev = node.prev

    node.prev = at
    node.next = at.next
    node.prev.next = node
    node.next!.prev = node

    return node
  }

  /**
   * Push a new node with value `value` to the front of the list
   *
   * @param value - Push to the front of the list a node with the given value `value`
   */
  pushFront(value: T) {
    if (!this.sentinel.next) {
      Object.assign(this, new CircularDoublyLinkedList())
    }

    return this.insertValue(value, this.sentinel)
  }

  /**
   * Push a new node with value `value` to the back of the list
   *
   * @param value - Push to the back of the list a node with the given value `value`
   */
  pushBack(value: T) {
    if (!this.sentinel.next) {
      Object.assign(this, new CircularDoublyLinkedList())
    }

    return this.insertValue(value, this.sentinel.prev)
  }

  /**
   * Insert a new node with value `value` immediately before `mark`.
   * If `mark` is not an element of the list, the list is not modified.
   * `mark` must not be null.
   *
   * @param value - The value with which to instantiate the inserted node
   * @param mark - A node in the list before which to insert the new node
   */
  insertBefore(value: T, mark: Node<T>) {
    if (mark.list !== this || !mark.prev) {
      return null
    }

    return this.insertValue(value, mark.prev)
  }

  /**
   * Insert a new node with value `value` immediately after `mark`.
   * If `mark` is not an element of the list, the list is not modified.
   * `mark` must not be null.
   *
   * @param value - The value with which to instantiate the inserted node
   * @param mark - A node in the list before which to insert the new node
   */
  insertAfter(value: T, mark: Node<T>) {
    if (mark.list !== this) {
      return null
    }

    return this.insertValue(value, mark)
  }

  /**
   * Move a node to the front of the list.
   * If the given node is not an element of the list, the list is not modified.
   * The given node must not be null.
   *
   * @param node - A node in the list to move to the front of the list
   */
  moveToFront(node: Node<T>) {
    if (node.list !== this || this.sentinel.next === node) {
      return
    }

    this.move(node, this.sentinel)
  }

  /**
   * Move a node to the back of the list
   * If the given node is not an element of the list, the list is not modified
   * The given node must not be null
   * @param node - A node in the list to move to the back thereof
   */
  moveToBack(node: Node<T>) {
    if (node.list !== this || this.sentinel.prev === node) {
      return
    }

    this.move(node, this.sentinel.prev)
  }

  /**
   * Move a given node to its new position before `mark`.
   * If either the given node or mark are not an element of the list, or node == mark, the list is not modified.
   * Both the node and mark must not be null (return value will be null)
   *
   * @param node - A node in the list to move
   * @param mark - A node in the list before which to move `node`
   */
  moveBefore(node: Node<T>, mark: Node<T>) {
    if (node.list !== this || mark.list !== this || !mark.prev || !mark.next) {
      return null
    }

    if (node === mark) {
      return node
    }

    return this.move(node, mark.prev)
  }

  /**
   * Move a given node to its new position after `mark`.
   * If either the given node or mark are not an element of the list, or node == mark, the list is not modified.
   * Both the node and mark must not be null.
   *
   * @param node - A node in the list to move
   * @param mark - A node in the list after which to move `node`
   */
  moveAfter(node: Node<T>, mark: Node<T>) {
    if (node.list !== this || node === mark || mark.list !== this) {
      return null
    }

    return this.move(node, mark)
  }

  /**
   * Convenience for inserting a given value into a new node after a given node `at`
   *
   * @param value - The value with which to instantiate the inserted node
   * @param at - A node in the list before which to move `node`
   */
  insertValue(value: T, at: Node<T>): Node<T> {
    return this.insert(new Node(value), at)
  }

  /**
   * Insert a copy of another list at the back of the caller list.
   * The lists may be equivalent, but must not be null.
   * @throws Throws if provided a list that is not an instance of `CircularDoublyLinkedList`
   */
  pushBackList(other: this) {
    if (!this.sentinel.next) {
      Object.assign(this, new CircularDoublyLinkedList())
    } else if (!(other instanceof CircularDoublyLinkedList)) {
      throw new TypeError(
        'other must be an instance of `CircularDoublyLinkedList`',
      )
    }
    for (
      let i = other.size(), n = other.head();
      i > 0;
      i--, n = other.next(n)!
    ) {
      if (n) {
        this.insertValue(n.value, this.sentinel.prev)
      }
    }
  }

  /**
   * Insert a copy of another list at the front of the caller list.
   * The lists may be the same, but must not be null.
   * @throws Throws if provided a list that is not an instance of `CircularDoublyLinkedList`
   */
  pushFrontList(other: this) {
    if (!this.sentinel.next) {
      Object.assign(this, new CircularDoublyLinkedList())
    } else if (!(other instanceof CircularDoublyLinkedList))
      throw new TypeError(
        'other must be an instance of `CircularDoublyLinkedList`',
      )

    for (
      let i = other.size(), n = other.tail()!;
      i > 0;
      i--, n = other.prev(n)!
    ) {
      this.insertValue(n.value, this.sentinel)
    }
  }
}
