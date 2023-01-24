function getInputValue() {
  let inputVal = document.getElementById("myinput").value; 
 
}

function vowel_counter(str1) {
  let vowels = 'aeiouAEIOU';
  let count = 0;

  for(let i = 0; i < str1.length ; i++) {
    if (vowels.indexOf(str1[x]) !== -1){
      count += 1;
    }
  }
  return count;
}

console.log(vowelCounter("I'm having a good day"));