/**
 * Tokenizer tokenizes string with given match rules.
 * @param {Array} map
 * @param {String} expr
 */
class Tokenizer {
  constructor(regs, expr) {
    this.regs = regs;
    if (expr) this.expr = expr;
    this.result = [];
  }

  init(expr) {
    this.expr = expr;
    this.result = [];
  }

  genTokens() {
    const sz = this.expr.length, expr = this.expr;
    const res = this.result;
    let i = 0, leftStr = expr;
    while (i < sz) {
      const prei = i;
      leftStr = expr.slice(i);
      for (const reg of this.regs) {
        const matchResult = leftStr.match(reg);
        if (matchResult !== null && matchResult.index === 0) {
          const content = matchResult[0];
          res.push(content);
          i += content.length;
        }
      }
      if (prei === i) throw Error("Something not matched!")
    }
    return this.result;
  }
}

export default Tokenizer;