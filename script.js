const showResult = document.getElementById('result');
const count = 0
const Input = document.getElementById('input');
const button = document.getElementById('button');

button.addEventListener('click', () => {
  const input = document.getElementById('input').value.toLowerCase();
  const split = input.split('')
  Input.value = ""

  for(let i = 0; i<split.length; i++){
    if(split[i] == 'a' || split[i] == 'e' || split[i] == 'i' || split[i] == 'o' || split[i] == 'u' ){
      count++
    }
    if(count > 1){
      showResult.innerText = `'${input}' has ${count} vowels`
    }
    else{
      showResult.innerText = `'${input}' has ${count} vowel`
    }
  }
})

