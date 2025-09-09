let text1 = document.getElementById("text").innerText;
let text2 = "        Second text";
let text3 = text2.trim();
let text4 = "Second text 4, Second text 4, Second text 4, Second text 4"

console.log(text1.concat(text2));
console.log("Text 2 lenght: " + text2.length);
console.log("Text 3 lenght: " + text3.length);
console.log("Text 2 Replace word: " + text3.replace("Second", "New"));
console.log("Text 2 Replace word: " + text4.replaceAll("Second", "New"));
console.log("Text 3 IndexOf: " + text3.indexOf("c"));
console.log("Text 3 CharAt: " + text3.charAt(2));