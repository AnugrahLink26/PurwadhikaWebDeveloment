// PROBLEM 1: Write a code to convert celsius to fahrenheit.
console.log("PROBLEM 1:")

let tempCelcius = 25
let convertFarenheit = (tempCelcius * 9 / 5) + 32

console.log(`${tempCelcius} Celcius = ${convertFarenheit} Farenheit`)

console.log("")

// PROBLEM 2: Write a code to check whether the number is odd or even
console.log("PROBLEM 2:")

let num = 7

if (num % 2 == 0) {
    console.log(`${num} is an even number`)
} else {
    console.log(`${num} is an odd number`)
}

console.log("")

// PROBLEM 3: Write a code to check whether the number is prime number or not
console.log("PROBLEM 3:")

let i = 2
let counter = 0

while (i < num) {
    if (num % i == 0) {
        counter++
        break
    }
    i++
}

if (counter == 0) {
    console.log(`${num} is a prime number`)
} else {
    console.log(`${num} is not a prime number`)
}

console.log("")

// PROBLEM 4: Write a code to ﬁnd the sum of the numbers 1 to N
// Example : 5 → 1 + 2 + 3 + 4 + 5 = 15
console.log("PROBLEM 4:")

let Num = 5
let n = 1
let desc = "1"

for (let j = 2; j <= Num; j++) {
    desc += ` + ${j}`   // Concat
    n += j;
}
console.log(`${Num} → ${desc} = ${n}`)

console.log("")

// PROBLEM 5: Write a code to ﬁnd factorial of a number
console.log("PROBLEM 5:")

let m = 1
let tempString = ""
let border = 1

for (let k = Num; k >= border; k--) {
    if (k != Num) {
        tempString += ` x ${k}`
    }    
    m *= k
}
console.log(`${Num}! → ${Num}${tempString} = ${m}`)

console.log("")

// PROBLEM 6: Write a code to print the ﬁrst N ﬁbonacci numbers
console.log("PROBLEM 6:")

let countFibonacci = 10
let f = 0

console.log(`First ${countFibonacci} fibonacci numbers are:`)

for (let l = 1; l <= countFibonacci; l++) {
    if (l == 1) {
        Fibonacci = 0;
    } else if (l == 2) {
        Fibonacci = 1;
        lastFibonacci = Fibonacci - 1;
    } else {
        f = Fibonacci
        Fibonacci = lastFibonacci + Fibonacci;
        lastFibonacci = f
    }
    console.log(Fibonacci)
}


