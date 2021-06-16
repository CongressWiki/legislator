export type PartialPick<T, K extends keyof T> = {
  [P in K]?: T[P];
};
