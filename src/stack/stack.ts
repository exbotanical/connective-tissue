import { BaseStack } from './base'

export class Stack extends BaseStack {
  constructor(public capacity: number) {
    super(capacity)
  }

  pop() {
    if (this.isEmpty) {
      return null
    }

    return this.state.pop() as number
  }

  push(x: number) {
    if (this.isFull) {
      return false
    }

    this.state.push(x)
    return true
  }
}
