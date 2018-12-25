// Max word length without loops or conditions
function findMaxWordLength(str) {
    return str.split(" ").reduce(function(x,y,z,a) { return Math.max(x,y.length)},0)
}

// Max word length  loops
function findMaxWordLength_Loops(str) {
    var maxLength = 0
    wordsArray = str.split(" ")
    for(i=0;i<wordsArray.length;i++){
      if (wordsArray[i].length > maxLength) {
         maxLength = wordsArray[i].length
      }
    }
    return maxLength
  }

//Using Conditional loops 

  function findMaxWordLength_Conditions(str) {
    var words = str.split(" ")
    if (words.length == 1){
       return words[0].length
    }
    if (words[0].length >= words[1].length) {
       words.splice(1,1)
       return findMaxWordLengthWithConditions(words.join(" "))
    }
    if (words[0].length < words[1].length) {
       return findMaxWordLengthWithConditions(words.slice(1, words.length).join(" "))
    }
    return str.length
  }