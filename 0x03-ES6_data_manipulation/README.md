![](https://media.geeksforgeeks.org/wp-content/uploads/20230831124926/What-is-Data-Manipulation.png)

# Data Manipulation

## Purpose
While working on projects there is a need to make code less abstract, but in doing this, we leave room for mistakes.
The solution is to make the code more abstract - with JavaScript, this can be done using higher order functions.

Take below the examples below - one less abstract than the other

```
let total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);
```


```
console.log((sum(range(1, 10))))
```

# Conclusion
More abstraction means less mistakes that might occur while trying to be explicit when writing user defined logic
