function prime(number) {
    if ( number <= 1 ) {
        return `${number} is not prime`;
    }
    const numberSqrt = Math.sqrt(number);
    let i = 2

    for (i = 2; i <= numberSqrt; i++) {

        if (number % i === 0) {
            return `${number} is not prime`;
        }
    }
    return `${number} is prime`
}
console.log(prime());