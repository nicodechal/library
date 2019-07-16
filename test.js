import { Heap, permute, UnionFind } from "./lib"

function testHeap() {
  const h = new Heap((a, b) => a < b);
  const arr = [1,4,2,24,6,5,4,3,4,5,2,3,4,5,2,3,45,2];
  const ans = [];
  for (const a of arr) {
    h.insert(a);
  }
  let i = 0;
  while (i < arr.length) {
    ans.push(h.remove())
    i++;
  }
  console.log(ans);
}

function testPermutation() {
  console.log(permute([1,2,3]))
}

testPermutation()
testHeap()
const uf = new UnionFind(10);
console.log(uf.join(0,1));
console.log(uf.join(1,2));
console.log(uf.join(2,3));
console.log(uf.join(3,4));
console.log(uf.p);
console.log(uf.find(2));