// Reverse String without loops 

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("this is going to be real fun"))

// reverse string using loops 

function reverseString_loops(str) {
    var reversedString = Array()
    var words = str.split("")
    for (var i = words.length-1; i >= 0; i--) {
        reversedString.push(words[i])
    }
    return reversedString.join("")
}

console.log(reverseString_loops("this is going to be real fun"))

// reverse string using loops another way
function reverseString_loops_1(str) {
    var reversedString = Array()
    for (var i = str.length-1; i >= 0; i--) {
        reversedString.push(str[i])
    }
    return reversedString.join("")
}

console.log(reverseString_loops_1("this is going to be real fun"))

// reverse string using recursion

function reverseString_recursion(str) {
    if (str == "") {
        return "";
    } else {
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}
console.log(reverseString_recursion("this is going to be real fun"))