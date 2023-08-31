let num = 10

/*
for (let i = 1; i <= num; i++) {
    eq = 5 * i;
    console.log(`5 x ${i} = ${eq}`)
}
*/
for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
        console.log(`${i} is an even number`)
    } else {
        console.log(`${i} is an odd number`)
    }
}

