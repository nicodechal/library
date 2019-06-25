/**
 * Heap init with a compare funciton for the elements in heap.
 * default is minimum heap
 * @param cmp, compare function for heap elements
 */
class Heap {
  constructor(cmp = (a, b) => a > b) {
    this._heap = [];
    this._cmp = cmp;
  }

  insert(val) {
    const heap = this._heap;
    heap.push(val);

    let k = heap.length - 1;
    while (k) {
      const parentIndex = Math.floor((k - 1) / 2);
      let vp = heap[parentIndex], vk = heap[k];
      if (this._cmp(vp, vk)) [heap[parentIndex], heap[k]] = [vk, vp];
      else break;

      k = parentIndex;
    }
  }

  remove() {
    const heap = this._heap;
    const ret = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.length--;
    const sz = heap.length;

    let k = 0;
    while (k < sz) {  
      const li = 2 * k + 1, ri = 2 * k + 2;
      if ((li >= sz || this._cmp(heap[li], heap[k])) && (ri >= sz || this._cmp(heap[ri], heap[k]))) break;

      let changeIndex;
      if (li >= sz) changeIndex = ri;
      else if (ri >= sz) changeIndex = li;
      else changeIndex = this._cmp(heap[li], heap[ri]) ? ri : li;
      [heap[changeIndex], heap[k]] = [heap[k], heap[changeIndex]];

      k = changeIndex;
    }

    return ret;
  }
}

export default Heap;

// function test() {
//   const h = new Heap((a, b) => a < b);
//   const arr = [1,4,2,24,6,5,4,3,4,5,2,3,4,5,2,3,45,2];
//   const ans = [];
//   for (const a of arr) {
//     h.insert(a);
//   }
//   let i = 0;
//   while (i < arr.length) {
//     ans.push(h.remove())
//     i++;
//   }
//   console.log(ans);
// }

// test()