// Starting from 1 and repeatedly adding 5 or multiplying by 3, an infinite set can be produced. 
// Given a number, find the sequence consisting of 5 and 3

function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history
        } else if (current > target) {
            return null
        } else {
            return find(current+5,`(${history}+5)`) || 
            find(current*3,`(${history}*3)`)
        }
    }
    return find(1,"1");
}
console.log(findSolution(13))
