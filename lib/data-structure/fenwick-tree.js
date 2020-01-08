class FenwickTree {

  constructor(sz) {
    this.sz = sz;
    this.l = Array(sz + 1).fill(0);
  }

  _lowbit(x) {
    return x & -x;
  }

  update(i, v) {
    if (i == 0) throw Error('index should not be 0');
    while (i < this.sz) {
      this.l[i] += v;
      i += this._lowbit(i);
    }
  }

  sum(i) {
    let ans = 0;
    while (i > 0) {
      ans += this.l[i];
      i -= this._lowbit(i);
    }
    return ans;
  }
}


export default FenwickTree;