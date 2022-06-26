import { Stack } from '.'

describe('stack', () => {
  it('returns the correct popped value', () => {
    const stack = new Stack(10)

    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.pop()).toEqual(3)

    stack.push(4)
    stack.push(5)

    expect(stack.pop()).toEqual(5)
    expect(stack.pop()).toEqual(4)
    expect(stack.pop()).toEqual(2)

    stack.push(6)
    expect(stack.pop()).toEqual(6)

    expect(stack.pop()).toEqual(1)
    expect(stack.pop()).toEqual(null)
  })

  it('enforces capacity', () => {
    const stack = new Stack(3)

    expect(stack.push(1)).toEqual(true)
    expect(stack.push(2)).toEqual(true)
    expect(stack.push(3)).toEqual(true)

    expect(stack.push(4)).toEqual(false)

    expect(stack.pop()).toEqual(3)
    expect(stack.push(4)).toEqual(true)
  })

  it('correctly identifies full or empty states', () => {
    const stack = new Stack(3)
    expect(stack.isEmpty).toEqual(true)
    expect(stack.isFull).toEqual(false)

    stack.push(1)
    expect(stack.isEmpty).toEqual(false)
    expect(stack.isFull).toEqual(false)

    stack.push(2)
    expect(stack.isEmpty).toEqual(false)
    expect(stack.isFull).toEqual(false)

    stack.push(3)
    expect(stack.isEmpty).toEqual(false)
    expect(stack.isFull).toEqual(true)
  })
})
