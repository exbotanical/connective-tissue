import { MinimumStack } from '.'

describe('min stack', () => {
  it('tracks the correct minimum value', () => {
    const stack = new MinimumStack(10)

    stack.push(-2)
    stack.push(0)
    stack.push(-3)

    expect(stack.min).toEqual(-3)

    stack.pop()
    expect(stack.min).toEqual(-2)

    stack.push(-21)

    stack.push(100)
    expect(stack.min).toEqual(-21)
    stack.pop()
    stack.pop()

    stack.push(-32)
    expect(stack.min).toEqual(-32)

    expect(stack.pop()).toEqual(-32)
    expect(stack.pop()).toEqual(0)
    expect(stack.pop()).toEqual(-2)
  })
})
