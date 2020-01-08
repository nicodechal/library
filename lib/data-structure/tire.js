class Tire {
  constructor() {
    this.root = new Map();
    this.root._list = [];
    this.root._isWord = false;
  }

  add(word) {
    let cur = this.root;

    for (const ch of word) {
      if (!cur.has(ch)) {
        const node = new Map();
        node._list = [];
        node._isWord = false;
        cur.set(ch, node);
      }
      cur._list.push(word);
      cur = cur.get(ch);
    }

    cur._isWord = true;
    cur._list.push(word);
  }

  has(word) {
    return !!(this.get(word) && this.get(word).length);
  }

  get(prefix) {
    let cur = this.root;

    for (const ch of prefix) {
      if (!cur.has(ch)) return [];
      cur = cur.get(ch);
    }

    return cur._list;
  }
}

export default Tire;