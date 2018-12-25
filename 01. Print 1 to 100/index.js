/*
Print from  1 to 100
*/

// Without any loops, using array functions
function print1To100() {
   Array.from({ length: 100 }, (_, x) => { console.log(x + 1)})
}
print1To100()

function print1To100_loops() {
    for (var i = 0; i < 100; i++) {
        i = i + 1
        console.log(i)
    }
}
//print1To100_loops()

function print1To100_noloops(num) {
    if (num < 100) {
        num = num + 1
        console.log(num)
        return print1To100_noloops(num)
    }
}
print1To100_noloops(0)