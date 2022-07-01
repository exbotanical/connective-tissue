import { MaxHeap } from './max-heap'

describe('max heap', () => {
  it.todo('', () => {
    const heap = new MaxHeap(10)
    heap.insert(12)
    expect(heap.peek()).toEqual(12)

    heap.insert(13)
    expect(heap.peek()).toEqual(13)

    heap.insert(1)
    expect(heap.peek()).toEqual(13)

    heap.insert(122)
    expect(heap.peek()).toEqual(122)
  })
})
