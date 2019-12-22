
class SegmentTree {
  constructor(arr) {
    this.arr = arr;
    this.length = arr.length;
    this.treeSize = 2 << Math.ceil(Math.log2(this.length));
    this.tree = Array(this.treeSize).fill(0);
    this.lazy = Array(this.treeSize).fill(0);
    this.build();
  }

  build(arr = this.arr, idx = 0, lo = 0, hi = this.length) {
    if (lo + 1 === hi) {
      this.tree[idx] = arr[lo];
      return;
    }

    const mid = (lo + hi) >> 1;
    this.build(arr, 2 * idx + 1, lo, mid);
    this.build(arr, 2 * idx + 2, mid, hi);

    this.tree[idx] = this.merge(this.tree[2 * idx + 1], this.tree[2 * idx + 2]);
  }

  query(i, j, tidx = 0, lo = 0, hi = this.length) {
    if (i > hi || j <= lo) return 0;

    if (this.lazy[tidx] !== 0) {
      this.tree[tidx] = (hi - lo) * this.lazy[tidx];

      if (lo + 1 !== hi) {
        this.lazy[2 * tidx + 1] += this.lazy[tidx];
        this.lazy[2 * tidx + 2] += this.lazy[tidx];
      }

      this.lazy[tidx] = 0;
    }

    if (i <= lo && j >= hi) return this.tree[tidx];

    const mid = (lo + hi) >> 1;

    if (i >= mid) {
      return this.query(i, j, 2 * tidx + 2, mid, hi);
    }
    if (j < mid) {
      return this.query(i, j, 2 * tidx + 1, lo, mid);
    }

    const l = this.query(i, j, 2 * tidx + 1, lo, mid);
    const r = this.query(i, j, 2 * tidx + 2, mid, hi);

    return this.merge(l, r);
  }

  update(idx, val, tidx = 0, lo = 0, hi = this.length) {
    if (lo + 1 === hi) {
      this.tree[tidx] = val;
      return;
    }

    const mid = (lo + hi) >> 1;

    if (idx >= mid) {
      this.update(idx, val, 2 * tidx + 2, mid, hi);
    } else if (idx < mid) {
      this.update(idx, val, 2 * tidx + 1, lo, mid);
    }

    this.tree[tidx] = this.merge(this.tree[2 * tidx + 1], this.tree[2 * tidx + 2]);
  }

  updateRange(i, j, val, tidx = 0, lo = 0, hi = this.length) {

    if (this.lazy[tidx] !== 0) {
      this.tree[tidx] += (hi - lo) * this.lazy[tidx];

      if (lo + 1 !== hi) {
        this.lazy[2 * tidx + 1] += this.lazy[tidx];
        this.lazy[2 * tidx + 2] += this.lazy[tidx];
      }

      this.lazy[tidx] = 0;
    }

    if (i > hi || j <= lo || lo >= hi) return;

    if (i <= lo && j >= hi) {
      this.tree[tidx] = (hi - lo) * val;

      if (lo + 1 !== hi) {
        this.lazy[2 * tidx + 1] += val;
        this.lazy[2 * tidx + 2] += val;
      }
      return;
    }

    const mid = (lo + hi) >> 1;

    this.updateRange(i, j, val, 2 * tidx + 1, lo, mid);
    this.updateRange(i, j, val, 2 * tidx + 2, mid, hi);

    this.tree[tidx] = this.merge(this.tree[2 * tidx + 1], this.tree[2 * tidx + 2]);
  }

  merge(v1, v2) {
    return v1 + v2;
  }
}

export default SegmentTree;