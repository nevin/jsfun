
#### Without any loops, using Array.From
```javascript

console.log(Array.from({length: 100},(_,x) => x+1))

```

#### Using Conditional loops 
```javascript

function iterateAndPrint(num) {
    if (num < 100) {
        num = num+1
        console.log(num)
        return iterateAndPrint(num)
    }
}

iterateAndPrint(0)

```
---
