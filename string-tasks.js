// Задача 1
function concatenateStrings(str1, str2) {
  return (str1 + str2).replace(/ /g, '');
}

// Задача 2
function getStringLength(str) {
  return str.length;
}

// Задача 3
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

// Задача 4
function getChar(str, index) {
  return str[index - 1];
}

// Задача 5
function removeFirstOccurrences(str, substring) {
  return str.replace(substring, '');
}

// Задача 6
function getRectangleString(width, height) {
  let result = '';

  for (let i = 0; i < height; i++) {
    if (i === 0 || i === height - 1) {
      // Первая и последняя строка - все звездочки
      result += '*'.repeat(width);
    } else {
      // Средние строки - звездочка, пробелы, звездочка
      result += '*' + ' '.repeat(width - 2) + '*';
    }

    // Добавляем перенос строки, кроме последней строки
    if (i < height - 1) {
      result += '\n';
    }
  }

  return result;
}

// Экспорт функций для тестирования
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    concatenateStrings,
    getStringLength,
    getStringFromTemplate,
    getChar,
    removeFirstOccurrences,
    getRectangleString
  };
}
