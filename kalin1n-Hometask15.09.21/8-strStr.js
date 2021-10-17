const strStr = (haystack, needle) => {
  if (!needle.length) {
    return needle.length;
  }
  if (needle.length > haystack.length) {
    return -1;
  }

  for (let i = 0, pointer = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[pointer]) {
      pointer++;
    } else if (pointer !== 0) {
      i = i - pointer;
      pointer = 0;
    }
    if (pointer === needle.length) return i - pointer + 1;
  }

  return -1;
};
