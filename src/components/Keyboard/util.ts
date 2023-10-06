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
  "]" = "]", // [11]
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
  '"' = '"', // [22]
  Shift = "⇧",
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

export enum ModKeys {
  Space = "Space",
}

export const orderAlphaKeys = (legendArray: string[]) => {
  const firstRow = legendArray.slice(0, 12)
  const secondRow = legendArray.slice(12, 23)
  const thirdRow = legendArray.slice(24, 34)

  return { firstRow, secondRow, thirdRow }
}

/*
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
  "]" = "]", // [11]
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
  '"' = '"', // [22]
  Shift = "⇧",
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
*/

/*
  export enum AlphaKeys {
  _ = "~",
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
  "]" = "]", // [11]
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
  '"' = '"', // [22]
  Shift = "⇧",
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

export enum ModKeys {
  Space = "Space",
}

export const orderAlphaKeys = (legendArray: string[]) => {
  const firstRow = legendArray.slice(0, 13)
  const secondRow = legendArray.slice(13, 24)
  const thirdRow = legendArray.slice(25, 35)

  return { firstRow, secondRow, thirdRow }
}

/*
  separate into rows
*/
