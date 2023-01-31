function countWords(){
  let words = document.getElementById("input").value;
  let numWord = 0; 
  let split = words.split(" ");

  for (let i = 0; i < split.length; i++) {
    const currentCharacter = words[i];
    if (split[i] != "") {
      numWord += 1;
    }
  }

  document.getElementById("show").innerText = numWord;
}

//const vowels = ['a', 'e', 'i', 'o', 'u']

//function countVowels()