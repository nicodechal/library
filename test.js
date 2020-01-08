import { Heap, permute, Kmp, UnionFind, Tokenizer, SegmentTree, FenwickTree, Tire } from "./lib"

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

function testUnionFind() {
  const uf = new UnionFind(10);
  console.log(uf.join(0,1));
  console.log(uf.join(1,2));
  console.log(uf.join(2,3));
  console.log(uf.join(3,4));
  console.log(uf.p);
  console.log(uf.find(2));
}

function testTokenizer() {
  const tz = new Tokenizer(['{', '}', ',', /[a-z]+/], "{{a,z},a{b,c},{ab,z}}");
  console.log(tz.genTokens().join(" "))
}

function testKmp() {
  console.log(Kmp("asdkjhfkjh", "jhfd"));
  console.log(Kmp("asdkjhfkjh", "fkjh"));
}

function testSegmentTree() {
  const st = new SegmentTree([1,5,3,2,4]);
  console.log(st);
  console.log(st.query(2, 3));
  console.log(st.update(1, 3));
  console.log(st);
  console.log(st.updateRange(0, 5, 2));
  console.log(st);
  console.log(st.query(3, 5));
  console.log(st);
}

function testFenwickTree() {
  const f = new FenwickTree(10);
  f.update(1, 10);
  f.update(2, 10);
  f.update(3, 10);
  f.update(3, 10);
  f.update(6, 10);
  f.update(0, 10);
  console.log(f.sum(5));
}

function testTire() {
  const t = new Tire();
  t.add('ab');
  t.add('abcd');
  t.add('abde');
  t.add('abce');
  t.add('bcd');
  console.log(t.root.get('a').get('b'));
  console.log(t, t.has('abcd'));
  console.log(t.get('abc'))
}

// testPermutation()
// testHeap()
// testUnionFind()
// testTokenizer()
// testKmp()
// testSegmentTree()
// testFenwickTree();
testTire();