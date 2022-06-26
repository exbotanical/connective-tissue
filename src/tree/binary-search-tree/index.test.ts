import { BinarySearchTree, TreeNode } from '.'

describe('binary search tree', () => {
  it('searches for and finds a given value', () => {
    const tree = new BinarySearchTree()
    const values = [1, 3, 13, 11, 12, 2, 9, 100]

    values.forEach(v => {
      tree.insert(v)
    })

    const searchResult = tree.search(13)

    const expected = {
      data: 13,
      left: { data: 11, left: expect.any(Object), right: expect.any(Object) },
      right: { data: 100, left: null, right: null },
    }

    expect(searchResult).toEqual(expected)
  })

  it('returns null when search yields no result', () => {
    const tree = new BinarySearchTree()
    const values = [1, 3, 13, 11, 12, 2, 9, 100]

    values.forEach(v => {
      tree.insert(v)
    })

    const searchResult = tree.search(20)

    expect(searchResult).toEqual(null)
  })

  it('performs inorder traversal', () => {
    const tree = new BinarySearchTree()
    const values = [1, 3, 13, 11, 12, 2, 9, 100]

    values.forEach(v => {
      tree.insert(v)
    })

    values.sort((a, b) => a - b)

    expect(tree.inorderTraverse()).toEqual(values)
  })

  it('performs postorder traversal', () => {
    const tree = new BinarySearchTree()
    const values = [1, 3, 13, 11, 12, 2, 9, 100]

    values.forEach(v => {
      tree.insert(v)
    })

    expect(tree.postorderTraverse()).toEqual([2, 9, 12, 11, 100, 13, 3, 1])
  })

  it('performs preorder traversal', () => {
    const tree = new BinarySearchTree()
    const values = [1, 3, 13, 11, 12, 2, 9, 100]

    values.forEach(v => {
      tree.insert(v)
    })

    expect(tree.preorderTraverse()).toEqual([1, 3, 2, 13, 11, 9, 12, 100])
  })

  it('removes a node', () => {
    const tree = new BinarySearchTree()
    const values = [1, 3, 13, 11, 12, 2, 9, 100]

    values.forEach(v => {
      tree.insert(v)
    })

    const expected = {
      root: {
        data: 1,
        left: null,
        right: {
          data: 3,
          left: { data: 2, left: null, right: null },
          right: {
            data: 100,
            left: {
              data: 11,
              left: { data: 9, left: null, right: null },
              right: { data: 12, left: null, right: null },
            },
            right: null,
          },
        },
      },
    }

    tree.remove(13)

    expect(tree).toEqual(expected)
  })

  it('inserts a node', () => {
    const tree = new BinarySearchTree()
    const values = [1, 3, 13, 11, 12, 2, 9, 100]

    values.forEach(v => {
      tree.insert(v)
    })

    tree.insert(25)

    const expected = {
      root: {
        data: 1,
        left: null,
        right: {
          data: 3,
          left: { data: 2, left: null, right: null },
          right: {
            data: 13,
            left: {
              data: 11,
              left: { data: 9, left: null, right: null },
              right: { data: 12, left: null, right: null },
            },
            right: {
              data: 100,
              left: { data: 25, left: null, right: null },
              right: null,
            },
          },
        },
      },
    }

    expect(tree).toEqual(expected)
  })
})
