export enum AlphaKeys {
  Q = "Q",
  W = "W",
  E = "E",
  R = "R",
  T = "T",
  Y = "Y",
  U = "U",
  I = "I",
  O = "O",
  P = "P",
  "[" = "[",
  "]" = "]",
  A = "A",
  S = "S",
  D = "D",
  F = "F",
  G = "G",
  H = "H",
  J = "J",
  K = "K",
  L = "L",
  ";" = ";",
  '"' = '"',
  Z = "Z",
  X = "X",
  C = "C",
  V = "V",
  B = "B",
  N = "N",
  M = "M",
  "<" = "<",
  ">" = ">",
  "/" = "/",
}
// 12, 11, 10

export const orderAlphaKeys = (legendArray: string[]) => {
  const firstRow = legendArray.slice(0, 12)
  const secondRow = legendArray.slice(12, 23)
  const thirdRow = legendArray.slice(23, 34)

  return { firstRow, secondRow, thirdRow }
}

/*
  separate into rows
*/
