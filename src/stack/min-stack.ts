import { BaseStack } from './base'

export class MinimumStack extends BaseStack {
  private minState: number[] = []

  constructor(public capacity: number) {
    super(capacity)
  }

  get min() {
    if (this.isEmpty) {
      return null
    }

    const x = this.minState.pop() as number
    this.minState.push(x)

    return x
  }

  push(x: number) {
    if (this.isFull) {
      return false
    }

    if (this.isEmpty) {
      this.state.push(x)
      this.minState.push(x)
    } else {
      this.state.push(x)

      const y = this.minState.pop() as number
      this.minState.push(y)
      if (x < y) {
        this.minState.push(x)
      } else {
        this.minState.push(y)
      }
    }

    return true
  }

  pop() {
    if (this.isEmpty) {
      return null
    }

    const x = this.state.pop() as number
    this.minState.pop()

    return x
  }
}
