import wordBank from "./wordle-bank.txt";

// Attempts can be represented by an array of arrays
// 6 tries with 5 letters for each try
export const defaultBoard = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
  // Use set for O(1) search time
  let wordSet;
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      // seperate words in list
      const wordArr = result.split("\n");
      wordSet = new Set(wordArr);
    });
  return { wordSet };
};
