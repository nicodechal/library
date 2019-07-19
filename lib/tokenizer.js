/**
 * Tokenizer tokenizes string with given match rules.
 * @param {Array} map
 * @param {String} expr
 */
class Tokenizer {
  constructor(map, expr) {
    this.map = map;
    if (expr) this.expr = expr;
    this.index = 0;
    this.result = [];
  }

  init(expr) {
    this.expr = expr;
    this.index = 0;
    this.result = [];
  }

  end() {
    return this.index >= this.length;
  }

  nextToken() {
    return this.expr[this.index];
  }

  get length() {
    return this.expr.length;
  }

  tokens() {
    let pre = this.index;
    while (this.index < this.expr.length) {
      for (const m of this.map) {
        if (m.cb.call(this)) break;
      }
      if (pre === this.index) throw new Error("Expr not matched!");
      pre = this.index;
    }
    return this.result;
  }
}

export default Tokenizer;