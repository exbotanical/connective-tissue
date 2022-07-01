import { swapElements } from '../utils'

export abstract class Heap {
  protected _size = 0
  protected heap: number[] = new Array(this.capacity + 1)

  constructor(
    protected capacity: number,
    private comparator: (child: number, parent: number) => boolean,
  ) {}

  get size() {
    return this._size
  }

  toJSON() {
    return this.heap.slice(1, this.size + 1)
  }

  peek() {
    return this.heap[1]
  }

  insert(el: number) {
    if (this._size - 1 > this.capacity) {
      throw Error('Capacity full.')
    }

    this._size++

    this.heap[this._size] = el
    let idx = this._size
    let parentIdx = Math.floor(this._size / 2)

    while (idx > 1 && this.comparator(this.heap[idx], this.heap[parentIdx])) {
      const parent = this.heap[parentIdx]
      const child = this.heap[idx]

      this.heap[idx] = parent
      this.heap[parentIdx] = child

      idx = parentIdx
      parentIdx = Math.floor(idx / 2)
    }
  }

  delete() {
    if (this._size < 1) {
      return -1
    }

    const removeEl = this.heap[1]

    // place the last element in the heap to the top
    this.heap[1] = this.heap[this._size]
    this._size--

    let idx = 1

    // While the deleted element is not a leaf node
    while (idx <= Math.floor(this._size / 2)) {
      // the left child of the deleted element
      const left = idx * 2
      // the right child of the deleted element
      const right = idx * 2 + 1
      // If the deleted element is smaller than the left or right child,
      // its value needs to be exchanged with the larger value (of the left and right child)
      if (
        this.comparator(this.heap[left], this.heap[idx]) ||
        this.comparator(this.heap[right], this.heap[idx])
      ) {
        // swap the larger value

        if (this.comparator(this.heap[left], this.heap[right])) {
          swapElements(idx, left, this.heap)

          idx = left
        } else {
          swapElements(idx, right, this.heap)

          idx = right
        }
      } else {
        break
      }
    }

    return removeEl
  }
}
