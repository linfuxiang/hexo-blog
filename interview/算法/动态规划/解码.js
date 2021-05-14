var numDecodings = function (s) {
  const len = s.length;
  const res = new Array(len + 1).fill(0);
  res[0] = 1;
  for (let i = 0; i < len; i++) {
    if (s[i] !== '0') {
      // 使用1个字符
      // 字符不为0，可以选择只使用当前1个字符s[i]
      // 因此可以和前i个的结果一致
      res[i + 1] = res[i];
    }
    if (i > 0 && s[i - 1] !== '0' && (s[i - 1] - '0') * 10 + (s[i] - '0') <= 26) {
      // 使用2个字符
      // i必须大于等于1，且前一个字符不能为0，且两个字符加起来是1-26
      // 因此可以和前i-1个的结果一致
      res[i + 1] += res[i - 1];
    }
  }
  return res[len];
};
