export class CircularQueue<T> {
  length = 0
  head = 0
  tail = -1
  state: (T | null)[] = []

  constructor(private size: number) {}

  get front() {
    if (this.isEmpty()) {
      return null
    }

    return this.state[this.head % this.size]
  }

  get back() {
    if (this.isEmpty()) {
      return null
    }

    return this.state[this.tail % this.size]
  }

  enqueue(value: T) {
    if (this.isFull()) {
      return false
    }

    this.tail++
    this.state[this.tail % this.size] = value
    this.length++

    return true
  }

  dequeue() {
    if (this.isEmpty()) {
      return null
    }

    const value = this.front

    this.state[this.head % this.size] = null
    this.head++
    this.length--

    return value
  }

  isEmpty() {
    return this.length === 0
  }

  isFull() {
    return this.length === this.size
  }
}
