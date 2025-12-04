// Задача 1
const concatenateStrings = (str1, str2) => {
  return (str1 + str2).replace(/\s+/g, '');
}

// Задача 2
const getStringLength = (str) => {
  return str.length;
}

// Задача 3
const getStringFromTemplate = (firstName, lastName) => {
  return `Hello, ${firstName} ${lastName}!`;
}

// Задача 4
const getChar = (str, index) => {
  return str[index - 1];
}

// Задача 5
const removeFirstOccurrences = (str, substring) => {
  return str.replace(substring, '');
}

// Задача 6
const getRectangleString = (width, height) => {
  if (width < 2 || height < 2) return '*'.repeat(width);
  const top = '*'.repeat(width);
  const middle = '*' + ' '.repeat(width - 2) + '*';
  const bottom = '*'.repeat(width);
  let result = top + '\n';
  for (let i = 0; i < height - 2; i++) {
    result += middle + '\n';
  }
  result += bottom;
  return result;
}
