export class TreeNode {
  constructor(
    public data: number,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null,
  ) {}
}

// export class BinarySearchTree {
//   constructor(private root: TreeNode | null = null) {
//     this.root = root
//   }

//   insert(data: number) {
//     const node = new TreeNode(data)

//     if (!this.root) {
//       this.root = node
//     } else {
//       this.insertNode(this.root, node)
//     }
//   }

//   insertNode(node: TreeNode, newNode: TreeNode) {
//     if (newNode.data > node.data) {
//       if (!node.right) {
//         node.right = newNode
//       } else {
//         this.insertNode(node.right, newNode)
//       }
//     } else {
//       if (!node.left) {
//         node.left = newNode
//       } else {
//         this.insertNode(node.left, newNode)
//       }
//     }
//   }

//   remove(data: number) {
//     this.root = this.removeNode(this.root, data)
//     return this.root
//   }

//   removeNode(node: TreeNode | null, key: number) {
//     if (!node) {
//       return null
//     }

//     // traverse the left subtree
//     if (key < node.data) {
//       node.left = this.removeNode(node.left, key)
//       return node
//     }

//     // traverse the right subtree
//     if (key > node.data) {
//       node.right = this.removeNode(node.right, key)
//       return node
//     }

//     // node is a leaf; remove it
//     if (!node.left && !node.right) {
//       node = null
//       return node
//     }

//     // node with no left subtree
//     if (!node.left) {
//       node = node.right

//       return node
//     }

//     // node with no right subtree
//     if (!node.right) {
//       node = node.left
//       return node
//     }

//     // Deleting node with two children
//     // minimum node of the right subtree
//     // is stored in aux
//     const aux = this.findMinNode(node.right)
//     node.data = aux.data
//     node.right = this.removeNode(node.right, aux.data)
//     return node
//   }

//   search(data: number, root = this.root): TreeNode | null {
//     if (!root) {
//       return null
//     }

//     if (root.data === data) {
//       return root
//     }

//     if (data > root.data) {
//       return this.search(data, root?.right)
//     } else {
//       return this.search(data, root?.left)
//     }
//   }

//   findMinNode(node: TreeNode): TreeNode {
//     if (!node.left) {
//       return node
//     }

//     return this.findMinNode(node.left)
//   }

//   inorderTraverse(root = this.root, vals: number[] = []) {
//     if (!root) {
//       return vals
//     }

//     this.inorderTraverse(root.left, vals)
//     vals.push(root.data)
//     this.inorderTraverse(root.right, vals)
//     return vals
//   }

//   preorderTraverse(root = this.root, vals: number[] = []) {
//     if (!root) {
//       return vals
//     }

//     vals.push(root.data)
//     this.preorderTraverse(root.left, vals)
//     this.preorderTraverse(root.right, vals)

//     return vals
//   }

//   postorderTraverse(root = this.root, vals: number[] = []) {
//     if (!root) {
//       return vals
//     }

//     this.postorderTraverse(root.left, vals)
//     this.postorderTraverse(root.right, vals)
//     vals.push(root.data)

//     return vals
//   }
// }

export class BinarySearchTree {
  constructor(private root: TreeNode | null = null) {
    this.root = root
  }

  insert(data: number) {
    const newNode = new TreeNode(data)
    if (!this.root) {
      this.root = newNode
    }

    this.insertNode(this.root, newNode)
  }

  insertNode(node: TreeNode | null, newNode: TreeNode) {
    if (!node) {
      node = newNode
    }

    if (newNode.data > node.data) {
      if (!node.right) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    } else if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    }
  }

  remove(key: number) {
    if (!this.root) {
      return null
    }

    return this.removeNode(this.root, key)
  }

  removeNode(node: TreeNode | null, key: number) {
    if (!node) {
      return null
    }

    if (key > node.data) {
      node.right = this.removeNode(node.right, key)
      return node
    }

    if (key < node.data) {
      node.left = this.removeNode(node.left, key)
      return node
    }

    if (!node.left && !node.right) {
      node = null
      return node
    }

    if (!node.left) {
      node = node.right
      return node
    }

    if (!node.right) {
      node = node.left
      return node
    }

    let ptr = node.right
    while (ptr.left) {
      ptr = ptr.left
    }

    node.data = ptr.data
    node.right = this.removeNode(node.right, ptr.data)
    return node
  }

  inorderTraverse(node = this.root, vals: number[] = []) {
    if (!node) {
      return vals
    }

    this.inorderTraverse(node.left, vals)
    vals.push(node.data)
    this.inorderTraverse(node.right, vals)

    return vals
  }

  preorderTraverse(node = this.root, vals: number[] = []) {
    if (!node) {
      return vals
    }

    vals.push(node.data)
    this.preorderTraverse(node.left, vals)
    this.preorderTraverse(node.right, vals)

    return vals
  }

  postorderTraverse(node = this.root, vals: number[] = []) {
    if (!node) {
      return vals
    }

    this.postorderTraverse(node.left, vals)
    this.postorderTraverse(node.right, vals)
    vals.push(node.data)

    return vals
  }

  search(key: number, root = this.root): TreeNode | null {
    if (!root) {
      return null
    }

    if (key > root.data) {
      return this.search(key, root.right)
    }

    if (key < root.data) {
      return this.search(key, root.left)
    }

    return root
  }
}
