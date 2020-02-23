export type Construct<T, E = []> = Pick<T, Exclude<{
  [K in keyof T]: T[K] extends Function ? never : K
}[keyof T], E>>;
