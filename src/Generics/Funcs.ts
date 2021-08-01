export const joinClassName = (...className: string[]) =>
  className.toString().replace(",", " ");

export const normalizeIndex = function (index: number, length: number) {
  let normalized_index = index;
  while (normalized_index < 0) normalized_index += length;
  while (normalized_index > length - 1) normalized_index -= length;
  return normalized_index;
};

export const getElementDynamic = (array: any[], index: number) => {
  const normalizedIndex = normalizeIndex(index, array.length);
  return array[normalizedIndex];
};

export const clearChild = (node: HTMLElement) => {
  node.innerHTML = "";
};
