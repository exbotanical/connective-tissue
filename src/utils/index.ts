export function swapElements<T>(x: number, y: number, ref: T[]) {
  const tmp = ref[x]

  ref[x] = ref[y]
  ref[y] = tmp
}
