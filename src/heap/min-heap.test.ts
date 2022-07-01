import { MinHeap } from './min-heap'

describe('min heap', () => {
  it.todo('', () => {
    const heap = new MinHeap(10)
    heap.insert(12)
    expect(heap.peek()).toEqual(12)

    heap.insert(13)
    expect(heap.peek()).toEqual(12)

    heap.insert(1)
    expect(heap.peek()).toEqual(1)

    heap.insert(122)
    expect(heap.peek()).toEqual(1)
  })
})
