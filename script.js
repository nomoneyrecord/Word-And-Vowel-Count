function countWords(){
  let words = document.getElementById("input").value;
  let numWord = 0; 
  let split = words.split(' ');

  for (let i = 0; i < split.length; i++) {
    const currentCharacter = words[i];
    if (split[i] != "") {
      numWord += 1;
    }
  }

  document.getElementById("show").innerText = numWord;
}
const vowels = ["a", "e", "i", "o", "u"]

function countVowels(text) {
  let count = 0;
  let countVowels = document.getElementById("input").value;

for (let letter of text.toLowerCase()) {
  if (countVowels.includes(letter)) {
    count++
  }
}


}