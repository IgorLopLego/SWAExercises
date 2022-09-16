function powerOrFactorial(m,n){
    let result;
    if(n === undefined)
    {
      result = factorial(m);
      return result;
    }
    else{
        result = m;
        for (let i = 0; i < n-1; i++) {
            result *= m;
        }

    }
    return result;
}

function factorial(n){
    if (n < 0)
        return -1;

    // If the number is 0, its factorial is 1.
    else if (n == 0)
        return 1;

    // Otherwise, call the recursive procedure again
    else {
        return (n * factorial(n - 1));
    }
}

console.log("Power: " + powerOrFactorial(5,3));
console.log("Factorial: " + powerOrFactorial(5));