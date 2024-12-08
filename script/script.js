// Helper function to create the results display dynamically
function createResult(index, description, answer) {
    return `
        <div class="result">
            <span>${index}. ${description}</span>
            <button onclick="toggleAnswer(this)">Show Answer</button>
            <div class="answer hidden">${answer}</div>
        </div>`;
}

// Function to toggle answers
function toggleAnswer(button) {
    let answerDiv = button.nextElementSibling; // Select the answer div
    if (answerDiv.classList.contains("hidden")) {
        answerDiv.classList.remove("hidden");
        button.textContent = "Hide Answer";
    } else {
        answerDiv.classList.add("hidden");
        button.textContent = "Show Answer";
    }
}

// Array to store problem outputs
const output = [];

// 1. Find the maximum number in an array
function findMax(arr) {
    let max = Math.max(...arr);
    output.push(createResult(1, "Max number in the array", max));
}
findMax([10, 20, 5, 40, 25]);

// 2. Remove duplicates from an array
function removeDuplicates(arr) {
    let unique = [...new Set(arr)];
    output.push(createResult(2, "Array without duplicates", unique));
}
removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

// 3. Reverse an array
function reverseArray(arr) {
    let reversed = [...arr].reverse();
    output.push(createResult(3, "Reversed array", reversed));
}
reverseArray([10, 20, 30, 40]);

// 4. Find the second largest element
function findSecondLargest(arr) {
    let unique = [...new Set(arr)].sort((a, b) => b - a);
    output.push(createResult(4, "Second largest element", unique[1]));
}
findSecondLargest([10, 20, 30, 40, 50]);

// 5. Check if an array is a subset of another
function isSubset(arr1, arr2) {
    let result = arr2.every(val => arr1.includes(val));
    output.push(createResult(5, "Is subset [2, 4] a subset of [1, 2, 3, 4, 5]", result));
}
isSubset([1, 2, 3, 4, 5], [2, 4]);

// 6. Reverse a string
function reverseString(str) {
    let reversed = str.split('').reverse().join('');
    output.push(createResult(6, "Reversed string", reversed));
}
reverseString("hello");

// 7. Check if a string is a palindrome
function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    let result = str === reversed;
    output.push(createResult(7, `Is '${str}' a palindrome`, result));
}
isPalindrome("madam");

// 8. Count vowels in a string
function countVowels(str) {
    let count = (str.match(/[aeiou]/gi) || []).length;
    output.push(createResult(8, "Vowel count in 'hello world'", count));
}
countVowels("hello world");

// 9. Find the longest word in a string
function findLongestWord(sentence) {
    let longest = sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
    output.push(createResult(9, "Longest word in 'The quick brown fox jumps over the lazy dog'", longest));
}
findLongestWord("The quick brown fox jumps over the lazy dog");

// 10. Check if two strings are anagrams
function areAnagrams(str1, str2) {
    let sortedStr1 = str1.toLowerCase().split('').sort().join('');
    let sortedStr2 = str2.toLowerCase().split('').sort().join('');
    output.push(createResult(10, `Are '${str1}' and '${str2}' anagrams?`, sortedStr1 === sortedStr2));
}
areAnagrams("listen", "silent");

// 11. Check if a variable is an array
function isArray(variable) {
    output.push(createResult(11, "Is [1, 2, 3] an array?", Array.isArray(variable)));
}
isArray([1, 2, 3]);

// 12. Convert a string to a number
function stringToNumber(str) {
    let num = parseFloat(str);
    output.push(createResult(12, `String '${str}' converted to a number`, num));
}
stringToNumber("42");

// 13. Check if a number is an integer
function isInteger(num) {
    output.push(createResult(13, `Is 42 an integer?`, Number.isInteger(num)));
}
isInteger(42);

// 14. Get the data type of a variable
function getDataType(variable) {
    output.push(createResult(14, `Data type of 42`, typeof variable));
}
getDataType(42);

// 15. Check if a value is null or undefined
function isNullOrUndefined(value) {
    output.push(createResult(15, `Is null null or undefined?`, value == null));
}
isNullOrUndefined(null);

// 16. Swap two numbers without using a third variable
function swap(a, b) {
    [a, b] = [b, a];
    output.push(createResult(16, `Swapped values of ${a} and ${b}`, `${a}, ${b}`));
}
swap(5, 10);

// 17. Check if a number is even or odd
function isEven(num) {
    output.push(createResult(17, `Is 4 even?`, num % 2 === 0 ? "Even" : "Odd"));
}
isEven(4);

// 18. Find the square of a number
function square(num) {
    output.push(createResult(18, `Square of 5`, num ** 2));
}
square(5);

// 19. Use the ternary operator for conditions
function checkAge(age) {
    output.push(createResult(19, `Age 18:`, age >= 18 ? "Adult" : "Minor"));
}
checkAge(18);

// 20. Check if a number is divisible by another
function isDivisible(num, divisor) {
    output.push(createResult(20, `Is 10 divisible by 2?`, num % divisor === 0));
}
isDivisible(10, 2);

// 21. Find the sum of an array
function sumArray(arr) {
    let sum = arr.reduce((sum, num) => sum + num, 0);
    output.push(createResult(21, "Sum of array [1, 2, 3, 4, 5]", sum));
}
sumArray([1, 2, 3, 4, 5]);

// 22. Flatten a nested array
function flattenArray(arr) {
    output.push(createResult(22, "Flattened array", arr.flat(Infinity)));
}
flattenArray([1, [2, [3, 4]], 5]);

// 23. Find the frequency of elements in an array
function frequencyCounter(arr) {
    let freq = arr.reduce((freq, num) => {
        freq[num] = (freq[num] || 0) + 1;
        return freq;
    }, {});
    output.push(createResult(23, "Frequency counter", JSON.stringify(freq)));
}
frequencyCounter([1, 2, 2, 3, 3, 3]);

// 24. Check if a string contains only digits
function isOnlyDigits(str) {
    output.push(createResult(24, `Does '12345' contain only digits?`, /^\d+$/.test(str)));
}
isOnlyDigits("12345");

// 25. Capitalize the first letter of each word in a string
function capitalizeWords(sentence) {
    output.push(createResult(25, "Capitalized sentence", sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')));
}
capitalizeWords("hello world from javascript");

// 26. Find the intersection of two arrays
function arrayIntersection(arr1, arr2) {
    let intersection = arr1.filter(elem => arr2.includes(elem));
    output.push(createResult(26, "Intersection of arrays", intersection));
}
arrayIntersection([1, 2, 3, 4], [3, 4, 5]);

// 27. Sort an array of strings by length
function sortByLength(arr) {
    arr.sort((a, b) => a.length - b.length);
    output.push(createResult(27, "Sorted by length", arr));
}
sortByLength(["apple", "pie", "banana", "kiwi"]);

// 28. Find the factorial of a number
function factorial(n) {
    let result = n === 0 ? 1 : n * factorial(n - 1);
    output.push(createResult(28, `Factorial of ${n}`, result));
}
factorial(5);

// 29. Merge two sorted arrays
function mergeSortedArrays(arr1, arr2) {
    let merged = [...arr1, ...arr2].sort((a, b) => a - b);
    output.push(createResult(29, "Merged sorted arrays", merged));
}
mergeSortedArrays([1, 3, 5], [2, 4, 6]);

// 30. Remove falsy values from an array
function removeFalsy(arr) {
    output.push(createResult(30, "Array without falsy values", arr.filter(Boolean)));
}
removeFalsy([0, 1, false, 2, '', 3, null, undefined]);

// Render all results on the page
document.body.innerHTML += `
    <div id="output">
        ${output.join("")}
    </div>
`;

// CSS for neat layout
const style = document.createElement("style");
style.innerHTML = `
    body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        margin: 20px;
    }
    .result {
        margin-bottom: 15px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        background-color: #f9f9f9;
    }
    .answer {
        margin-top: 10px;
        color: #333;
    }
    .hidden {
        display: none;
    }
    button {
        margin-top: 5px;
        padding: 5px 10px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    button:hover {
        background-color: #0056b3;
    }
`;
document.head.appendChild(style);
