
/**
 * test if A includes B using KMP.
 * @param {String} A 
 * @param {String} B 
 */
const Kmp = (A, B) => {
  const sz = A.length, subsz = B.length;
  const next = getNext(A);
  let i = 0, j = 0;
  while (i < sz && j < subsz) {
    if (j == -1 || A[i] === B[j]) {
      i++;
      j++;
    } else {
      j = next[j];
    }
  }
  return j < subsz ? -1 : i - j;
}

const getNext = A => {
  const sz = A.length;
  const next = Array(sz);
  let j = 0, k = -1;
  next[0] = -1;
  while (j < sz - 1) {
    if (k == -1 || A[j] === A[k]) {
      k++;
      j++;
      next[j] = k;
    } else {
      k = next[k];
    }
  }
  return next;
}

export default Kmp;