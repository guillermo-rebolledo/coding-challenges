const partitionLabels = (S) => {
  if (!S || S.length === 0) return S;

  const ocurrenceMap = new Map();
  const result = [];
  let len = 0;

  for (let index = 0; index < S.length; index++) {
    ocurrenceMap.set(S[index], index);
  }

  while (len < S.length) {
    let newStr = '';
    let strStart = len;
    let strEnd = ocurrenceMap.get(S[strStart]);

    while (strStart <= strEnd) {
      newStr += S[strStart];
      strEnd = Math.max(ocurrenceMap.get(S[strEnd]), ocurrenceMap.get(S[strStart]));
      len += 1;
      strStart += 1;
    }

    result.push(newStr.length);
  }
  return result;
}

console.log(partitionLabels('ababcbacadefegdehijhklij'))