import { Heap } from './base'

export class MaxHeap extends Heap {
  constructor(capacity: number) {
    super(capacity, (a, b) => a > b)
  }
}
