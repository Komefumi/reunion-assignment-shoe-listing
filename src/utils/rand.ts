import { randomWords } from "@data/seed";
import { PRICE_UNIT_SIZE, MAX_PRICE_UNITS } from "@config";

export function generateRandomPhrase(nameLength: number) {
  const chosenLength = parseInt(nameLength + "");
  if (isNaN(chosenLength)) {
    throw new Error(
      "Error! Must provide a proper length to generateRandomName"
    );
  }

  let generatedName = "";

  for (let i = 0; i < chosenLength; i++) {
    generatedName += selectRandomElementFromArray(randomWords);
    if (i < chosenLength - 1) {
      generatedName += " ";
    }
  }

  return generatedName;
}

export function selectRandomElementFromArray(itemArray: any[]) {
  const arrayLength = itemArray.length;
  if (arrayLength < 2) {
    throw new Error(
      "Error! It's meaningless to choose a random element from an array that doesn't have at least two elements."
    );
  }
  const lastItemIndex = arrayLength - 1;
  return itemArray[Math.ceil(Math.random() * lastItemIndex)];
}

export function generateRandomPrice(): number {
  return Math.ceil(Math.random() * MAX_PRICE_UNITS) * PRICE_UNIT_SIZE;
}
