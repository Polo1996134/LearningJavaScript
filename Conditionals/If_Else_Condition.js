/*
### Title: Apply Brakes

### Level: Level 1 - Easy

### Time to Solve the Problem: 5 Mins

### Problem Description

You are given two numbers representing `distance` and `time`. You need to calculate the `speed` using the
 formula `speed = distance/time` and determine whether to apply brakes or keep going based on the speed.

### Input

**Input Format:**
The first line contains two space-separated integers representing the distance travelled by car 
and the time taken to cover that distance.

**Constraints:**

- Distance < 1000
- Time taken < 5

### Output

**Output Format:**
Print "Apply Brake" if the speed is greater than 40, otherwise print "Keep Going".

### Sample Input 1

```
100 2
```

### Sample Output 1

```
Apply Brake
```
*/


let distance = 200

let time = 4

let speed = distance / time


if (speed > 40)
    console.log("Apply Brake")

else
console.log("Keep Going")






