// Problem 3
let num = 19
let diveder = 0

for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        diveder++
    }
}

console.log(`${num} ${diveder === 2 ? 'is' : 'is not'} a prime number`)

// Problem 5

let Num = 5
let counter = 1
let desc = Num

for (let j = Num; j > 1; j--) {
    desc += ` x ${j - 1}`
    counter += j
}

console.log(`${Num} -> ${desc} = ${counter}`)

// Problem 6
let n = 10
let curr = 0
let next = 1
let temp = ""

for (let k = 1; k <= n; k++) {
    temp += `${curr} `
    let count = curr + next
    curr = next
    next = count
}

console.log(`${n} -> ${temp}`)
