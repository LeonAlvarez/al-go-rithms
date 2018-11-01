const isPrime = n => {
    for(let i = 2, x=Math.sqrt(n); i <= x; i++)
        if (n % i === 0) return false; 
    return n !== 0  && n !== 1;
}
