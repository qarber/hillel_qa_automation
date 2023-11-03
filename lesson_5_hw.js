/*
1. 
  Напиши функцію map(fn, array), яка приймає на вхід функцію та масив, 
  та обробляє кожен елемент масиву цією функцією, повертаючи новий масив. 
  Приклад:
*/

function map(fn, array) {
  // ваш код
  let resultArray = [];
  for (let i = 0; i < array.length; i++) {
    ;
    resultArray.push(fn(array[i]));
  }
  return resultArray;
}

function square(x) {
  return x * x;
} // повертає квадрат числа

console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []

// // Зверніть увагу: функція не повинна змінювати переданий їй масив:

var arr = [1, 2, 3];
console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]

/*
  2. Написати функцію яка форматує текст: 
    - прибирає пробіли з початку і кінця, 
    - прибарає всі займі пробіли (два і більше підряд)
    - кожне речення починає з великої букви, а всі наступні символи в речені робить маленькими
// */
function formatText(text) {
  // ваш код
  text = text.trim();
  text = text.replace("  ","");
  let sentencesArray = text.split(/(?<=[.]) /); // В дужках юзаємо регулярний вираз, який ділить текс на речення по символу "."
  // Ініціалізуємо результуючий рядок
  let formattedText = "";
  
  for (let i = 0; i < sentencesArray.length; i++) {
      let sentenceIndex = sentencesArray[i];
      // Змінюємо перший символ речення на велику літеру, а решту на маленькі.
      sentenceIndex = sentenceIndex.charAt(0).toUpperCase() + sentenceIndex.slice(1).toLowerCase();
      
//       // Додаємо речення до результуючого тексту, додаючи пробіл, якщо це не перше речення.
      formattedText += i === 0 ? sentenceIndex : " " + sentenceIndex;
  }

  return formattedText;

}

console.log(formatText("heLLo, this is My teXT.   have A NiCe DaY  ")); // "Hello, this is my text. Have a nice day"
console.log(formatText(" Hello woRld   ")); // "Hello world"

// /*
//     3. Написати функцію, яка поверне число голосних букв в строкі
// */

function countVowels(arr) {
//   // Ваш код
  let countString = arr.match(/[aeiou]/gi);     // шукаємо всі можливі голосні букви через регулярний вираз 
  return countString ? countString.length : 0;
}

console.log(countVowels("aaaat")); // виводить 4
console.log(countVowels("Hello world")); // виводить 3

// /*
//     4. Написати функцію, яка видаляє всі спеціальні символи зі строки (залишає лише числа, букви і пробіли в будь-якому регістрі)
// */
function clearStr(str) {
  // Ваш код
  let clearString = str.replace(/[:%$#%;*]/gi,"");     // шукаємо всі можливі спец символи через регулярний вираз 
  return clearString; 
}

console.log(clearStr("My var: 22 ")); // виведе "My var 22"
console.log(clearStr("Foo %$#% bar")); // виведе "Foo bar"
console.log(clearStr("; SELECT * FROM passwords ")); // виведе "SELECT FROM passwords"
