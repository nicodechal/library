class TireNode {
  constructor() {
    this.m = new Map();
    this.list = [];
    this.isWord = false;
  }

  add(word) {
    let cur = this;

    for (const ch of word) {
      if (!cur.has(ch)) {
        cur.set(ch, new TireNode());
      }
      cur.list.push(word);
      cur = cur.get(ch);
    }

    cur.isWord = true;
    cur.list.push(word);
  }

  getWords(prefix) {
    let cur = this;

    for (const ch of prefix) {
      if (!cur.has(ch)) return [];
      cur = cur.get(ch);
    }

    return cur.list;
  }

  hasWord(word) {
    return !!(this.getWords(word) && this.getWords(word).length);
  }

  has(k) {
    return this.m.has(k);
  }

  get(k) {
    return this.m.get(k);
  }

  set(k, v) {
    return this.m.set(k, v);
  }
}

class Tire {
  constructor() {
    return new TireNode();
  }
}

export default Tire;