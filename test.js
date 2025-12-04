const {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  getChar,
  removeFirstOccurrences,
  getRectangleString
} = require('./string-tasks.js');

// Функция для проверки тестов
function test(testName, actual, expected) {
  if (actual === expected) {
    console.log(`✓ ${testName}`);
    return true;
  } else {
    console.log(`✗ ${testName}`);
    console.log(`  Expected: ${JSON.stringify(expected)}`);
    console.log(`  Actual: ${JSON.stringify(actual)}`);
    return false;
  }
}

console.log('=== Задача 1: concatenateStrings ===');
test("'aa', 'bb' => 'aabb'", concatenateStrings('aa', 'bb'), 'aabb');
test("'aa', ' ' => 'aa'", concatenateStrings('aa', ' '), 'aa');
test("'', 'bb' => 'bb'", concatenateStrings('', 'bb'), 'bb');

console.log('\n=== Задача 2: getStringLength ===');
test("'test' => 4", getStringLength('test'), 4);
test("'' => 0", getStringLength(''), 0);
test("'Hello World' => 11", getStringLength('Hello World'), 11);

console.log('\n=== Задача 3: getStringFromTemplate ===');
test("'John', 'Doe' => 'Hello, John Doe!'", getStringFromTemplate('John', 'Doe'), 'Hello, John Doe!');
test("'Chuck', 'Norris' => 'Hello, Chuck Norris!'", getStringFromTemplate('Chuck', 'Norris'), 'Hello, Chuck Norris!');

console.log('\n=== Задача 4: getChar ===');
test("'John Doe', 1 => 'J'", getChar('John Doe', 1), 'J');
test("'cat', 3 => 't'", getChar('cat', 3), 't');

console.log('\n=== Задача 5: removeFirstOccurrences ===');
test("'To be or not to be', 'not' => 'To be or  to be'", removeFirstOccurrences('To be or not to be', 'not'), 'To be or  to be');
test("'I like legends', 'end' => 'I like legs'", removeFirstOccurrences('I like legends', 'end'), 'I like legs');
test("'ABABAB', 'BA' => 'ABAB'", removeFirstOccurrences('ABABAB', 'BA'), 'ABAB');

console.log('\n=== Задача 6: getRectangleString ===');
const rect1 = getRectangleString(5, 4);
const expected1 = '*****\n*   *\n*   *\n*****';
test('Rectangle 5x4', rect1, expected1);

const rect2 = getRectangleString(3, 3);
const expected2 = '***\n* *\n***';
test('Rectangle 3x3', rect2, expected2);

console.log('\n=== Все тесты завершены ===');
