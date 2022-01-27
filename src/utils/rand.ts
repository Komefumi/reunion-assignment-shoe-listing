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
  return itemArray[Math.floor(Math.random() * arrayLength)];
}

export function generateRandomPrice(): number {
  return Math.floor(Math.random() * (MAX_PRICE_UNITS + 1)) * PRICE_UNIT_SIZE;
}
