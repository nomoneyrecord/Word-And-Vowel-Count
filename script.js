function countWords(){
  const words = document.getElementById("input").value;
  let numWord = 0; 
  const split = words.split(' ');

  for (let i = 0; i < words.length; i++) {
    const currentCharacter = words[i];
    if (currentCharacter == " ") {
      numWord += 1;
    }
  }
  numWord += 1;

  document.getElementById("show").innerText = numWord;
}