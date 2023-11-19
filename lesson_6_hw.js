/*
1. Написати функцію, яка перетворює строку на масив слів,
    сортує його за алфавітним порядком і повертає (у масиві не повинно бути пробілів як елементів)
 */

const str = "Це довільний текст для створення масиву слів ";
function stringToArray(str) {
    // Ваш код
const newArray = str.trim()
.toLowerCase()
.split(" ")
.sort((a,b) => a.localeCompare(b)); // Для багатьох алфавітів краще використовувати метод str.localeCompare для правильного сортування літер

return newArray

}

console.log(stringToArray(str));    // виводить [ 'для', 'довільний', 'масиву', 'слів', 'створення', 'текст', 'це' ]

/*
2. Написати функцію, яка видаляє з масива елементи, що дублюються, та повертає масив оригінальних елементів,
відсортованих за зростанням
 */
const initialArray = [1, 4, 6, 6, 7, 5, 34, 5, 1000, 66, 1];
function removeDuplicatesAndSort(arr) {
    // Ваш код

    function compare(a, b) {
        if (a > b) return 1; // якщо перше значення більше за друге
        if (a == b) return 0; // якщо значення рівні
        if (a < b) return -1; // якщо перше значення меньше за друге
      }

    return Array.from(new Set(arr)).sort(compare); // також є коротший варіант запису функціі порівняння .sort((a,b) => a-b);

}

console.log(removeDuplicatesAndSort(initialArray)); // виводить [ 1, 4, 5, 6, 7, 34, 66, 1000 ]
/*
3. Написати функцію, яка поверне масив парних чисел
 */
const initialArray2 = [2, 3, 6, 7, 9, 12];
function arrayOfEvens(arr) {
    // Ваш код
    let finalArray = [];
    for (let i = 0; i < arr.length; i++) {
        let result = arr[i] % 2; 
        if (result === 0) {
           finalArray.push(arr[i]);
        } 
    }
    return finalArray; 

}

console.log(arrayOfEvens(initialArray2)); // виводить [ 2, 6, 12 ]

/*
4. Написати функцію, яка сформує масив з послідовності чисел, формуючи його з аргумента, який збільшує
кожний наступний елемент послідовності на самого себе. Максимальне значення масиву не повинно перевищувати число 30.
 */
function createArray(element) {
    // Ваш код
    let newArray = [element];
     
     for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] < 30) {
            let result = newArray[i] + element;
            newArray.push(result);
     }
     
    }
    return newArray;

// ще як варіант через цикл do while 

// let i = 0;
    // do {
    //     let result = newArray[i] + element;
    //     i++;
    // newArray.push(result);
    // }
    // while (newArray[i] < 30)



}

console.log(createArray(5)); // виведе [ 5, 10, 15, 20, 25, 30 ]
console.log(createArray(3)); // виведе [ 3,  6,  9, 12, 15, 18, 21, 24, 27, 30 ]

