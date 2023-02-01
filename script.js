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

function countVowels(){
  let words = document.getElementById("input").value;
  let vowels = 'aeiouAEIOU';
  let numVowel = 0;

  for (let x = 0; x < words.length; x++){
    if (vowels.indexOf(words[x]) !== -1)
    {
      numVowel += 1;
    }
  }
  document.getElementById("show2").innerText = numVowel;
}
