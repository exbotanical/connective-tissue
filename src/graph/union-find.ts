export class DisjointSetUnionFind {
  root: number[]

  constructor(size: number) {
    this.root = [...Array(size).keys()]
  }

  find(node: number) {
    return this.root[node]
  }

  connected(x: number, y: number) {
    return this.find(x) === this.find(y)
  }

  union(x: number, y: number) {
    const rootX = this.find(x)
    const rootY = this.find(y)

    if (rootX !== rootY) {
      for (const node of this.root) {
        if (this.find(node) === rootY) {
          this.root[node] = rootX
        }
      }
    }
  }
}
