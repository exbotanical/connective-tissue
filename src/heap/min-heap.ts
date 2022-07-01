import { Heap } from './base'

export class MinHeap extends Heap {
  constructor(capacity: number) {
    super(capacity, (a, b) => a < b)
  }
}
