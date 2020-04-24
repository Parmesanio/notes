# What is Big O?

Big O Asymptotic Analysis is a concept about not just solving a problem, but solving it in an efficient way.

What does "efficient" mean?

Pillars of Programming:
* Readable
* Time Complexity - runtime/# of operations
* Space Complexity (Memory)
    * Machines have limited memory

Measure how many operations a function runs instead of how long it takes to prove efficiency.

## Types of Big O

O(n) - Linear Time

Depends on the number of elements (n).  # of elements & operations increase linearly.

```javascript
const nemo = ['nemo'];

const everyone = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'nemo'];

const large = new Array(1000).fill('nemo');

function findNemo(array) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === 'nemo') {
      console.log("Found Nemo!")
      return;
    }
  }
}
// findNemo(nemo)
// findNemo(everyone)
findNemo(large) // O(n) ---> Linear Time

```

O(1) - Constant Time

Code in function executes X operations no matter how many times the function is called.

```javascript
const boxes = [0, 1, 2, 3, 4, 5];


function compressFirstBox(boxes) {
    console.log(boxes[0]); )
}

compressFirstBox(boxes) // O(1)

function logTwoBoxes(arr) {
  console.log(boxes[0])
  console.log(boxes[1])
}

logTwoBoxes(boxes) // O(2)

function anotherExample(arr) {
    // O(n)
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
    // O(1) since max operations is until i = 100
    for(let i = 0; i < 100; i++) {
        console.log('Hello')
    }
}
```

O(n^2) - Quadratic Time

Slow.

```javascript
const boxes = [0, 1, 2, 3, 4, 5];

function logAllPairs(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 1; j < arr.length; j++) {
      console.log(arr[i], arr[j])
    }
  }
}
logAllPairs(boxes) // O(n) * O(n) = O(n^2)
```

O(n!) - Garbage Time

REALLY REALLY SLOW.  NEVER DO THIS.  Creates a nested for loop per element


Simple rules to calculate Big O:

Think about array sizes when applying these rules.  As the array grows how significant are O(1), O(n), or O(n^2)?

1. Worst Case
    * Max possible operations

2. Remove Constants
    * Don't take any O(1) into calculations if any other O is present
    * O(1) are considered insignificant
    * Simplify O(2n) into O(n) since the 2 is insignificant

3. Different params should have different variables
    * function compressBoxesTwice(boxes, boxes2) {...}
    * Each param could have different lengths
    * O(a + b) or O(a*b) if nested for loops

4. Drop Non-dominant terms
    * If a function contains O(n) & O(n^2), then O(n) is insignificant, so drop it from calculations


## Space Complexity

1. Variables
2. Data Structures
3. Function Calls
4. Allocations

```javascript
function boo(n) {
  for(let i = 0; i < n.length; i++) {
    console.log('boooo!');
  }
}
boo([1, 2, 3, 4, 5]);
```

The `let i =0;` is the only thing taking up memory in the above example, so Space Complexity is O(1) and Time Complexity is O(n).

```javascript
function arrayOfHiNTimes(n) {
  let hiArray = [];

  for(let i = 0; i < n; i++) {
    hiArray[i] = 'hi'
  }
  return hiArray;
}

arrayOfHiNTimes(6);
```

This time we have `let i = 0;` and `let hiArray = [];`. `let hiArray = []` is a new data structure that we are populating per iteration.  This means the Space Complexity is O(n + 1) or O(n) following the drop non-dominants rule and the Time Complexity is O(n). 