import { Heap, permute, UnionFind, Tokenizer } from "./lib"

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
  const tz = new Tokenizer([{
    cb () {
      const tk = this.nextToken();
      const matched = tk === '{' || tk === '}' || tk === ',';
      if (!matched) return false;
      this.index++;
      this.result.push(tk);
      return true;
    }
  }, {
    cb () {
      let res = "";
      while (!this.end()) {
        const tk = this.nextToken().charCodeAt(0);
        if (tk >= 'a'.charCodeAt(0) && tk <= 'z'.charCodeAt(0)) {
          res += this.nextToken();
          this.index++;
        } else break;
      }
      if (res === "") return false;
      this.result.push(res);
      return true;
    }
  }], "{{a,z},a{b,c},{ab,z}}")

  console.log(tz.tokens());
}

// testPermutation()
// testHeap()
// testUnionFind()
// testTokenizer()