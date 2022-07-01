import { MaxHeap } from './max-heap'

export class PriorityQueue extends MaxHeap {
  get isEmpty() {
    return this._size === 0
  }

  insertWithPriority(el: number) {
    return this.insert(el)
  }

  pullHighestPriority() {
    return this.peek()
  }
}
