/**
 * Union Find implementation
 * @param size the size of current union find.
 */
class UnionFind {
  constructor(size) {
    this._parent = Array(size);
    for (let i = 0; i < this._parent.length; i++) {
      this._parent[i] = i;
    }
  }

  get p () {
    return this._parent
  }

  find(x) {
    const p = this._parent, f = this.find.bind(this);
    return x === p[x] ? x : p[x] = f(p[x]);
  }

  join(x, y) {
    const p1 = this.find(x);
    const p2 = this.find(y);
    if (p1 !== p2) {
      this._parent[p1] = p2;
    }
  }
}

export default UnionFind;