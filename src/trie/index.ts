function calculateIndexFromChar(x: string, y = 'a') {
  return x.charCodeAt(0) - y.charCodeAt(0)
}

class TrieNode {
  constructor(public end = false, public children = new Array(26)) {}
}

export class Trie {
  root = new TrieNode()

  private has(word: string) {
    let curr = this.root
    for (const c of word) {
      if (!curr.children[calculateIndexFromChar(c)]) {
        return false
      }
      curr = curr.children[calculateIndexFromChar(c)]
    }
    return curr
  }

  insert(word: string) {
    let curr = this.root
    for (const c of word) {
      if (!curr.children[calculateIndexFromChar(c)]) {
        curr.children[calculateIndexFromChar(c)] = new TrieNode()
      }
      curr = curr.children[calculateIndexFromChar(c)]
    }
    curr.end = true
  }

  search(word: string) {
    const has = this.has(word)
    if (has) {
      return has.end
    }
    return false
  }

  startsWith(prefix: string) {
    return !!this.has(prefix)
  }
}
