# js fun

## Print 1 to 100 
### Without any loops, using Array.From

		console.log(Array.from({length: 100},(_,x) => x+1))

### Using Conditional loops 
		function iterateAndPrint(num) {
		  if (num < 100) {
			  num = num+1
			  console.log(num)
			  return iterateAndPrint(num)
		  }
		}
		iterateAndPrint(0)

# Find the length of the longest word in a sentence
### with iteration loop
		function findMaxWordLength(str) {
			var maxLength = 0
			wordsArray = str.split(" ")
			for(i=0;i<wordsArray.length;i++){
				if (wordsArray[i].length > maxLength) {
						maxLength = wordsArray[i].length
				}
			}
			return maxLength
		}

### Without any loops, Using array functions
		function findMaxWordLengthIntermediate(str) {
		  return str.split(" ").reduce(function(x,y,z,a) { return Math.max(x,y.length)},0)
		}
		
### Using Conditional loops 
		function findMaxWordLengthWithConditions(str) {
		  var words = str.split(" ")
			if (words.length == 1){
				return words[0].length
			}
			if(words[0].length >= words[1].length) {
				words.splice(1,1)
				return findMaxWordLengthWithConditions(words.join(" "))
			}
			if (words[0].length < words[1].length) {
				return findMaxWordLengthWithConditions(words.slice(1, words.length).join(" "))
			}
			return str.length
		}
