// factorialize 
// Using recursion
function factorialize(num) {
    if (num == 0) {
        return 1
    } else if (num < 0) {
        return -1
    } else {
        return num * factorialize(num-1)
    }
}

console.log(factorialize(5))

// Using loop
function factorialize_loop(num) {
    var factorialValue = (num >= 0) ? 1 : -1
    for(var i = 1; i<=num; i++) {
     factorialValue = factorialValue * i
    }
    return factorialValue
}

console.log(factorialize_loop(10))


function factorialize_loop_1(num) {
    for(var i = 1; num>=1; num-- ) {
      i  *= num
    }
    return i
}
console.log(factorialize_loop_1(10))