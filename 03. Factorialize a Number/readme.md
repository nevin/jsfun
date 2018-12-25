### Factorialize 

#### Using recursion
```javascript
function factorialize(num) {
    if (num == 0) {
        return 1
    } else if (num < 0) {
        return -1
    } else {
        return num * factorialize(num-1)
    }
}
```

#### Using loop
```javascript
function factorialize_loop(num) {
    var factorialValue = num >= 0 ? 1 : -1
    for(var i = 1; i<=num; i++) {
     factorialValue = factorialValue * i
    }
    return factorialValue
}
```
---