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

console.log(factorial(5));

function power(m,n){
    let powRes = m;
    for (let i = 0; i < n-1; i++) {
        powRes *= m;
    }
    return powRes;
}

console.log("Power function: " + power(5,3));