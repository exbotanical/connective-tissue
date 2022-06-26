export abstract class BaseStack {
  state: number[] = []

  constructor(public capacity: number) {}

  get isEmpty() {
    return this.state.length === 0
  }

  get isFull() {
    return this.state.length === this.capacity
  }

  abstract pop(): number | null
  abstract push(x: number): boolean
}
