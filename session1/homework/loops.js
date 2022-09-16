const array = [1,2,3,4,5,6,7,8,9, 10];

array.forEach((ar) =>{
    console.log(ar);
});

const sum = array.reduce((partialSum, element) => partialSum + element, 0);
console.log(sum);

const factorial = array.reduce((partialFatorial, element) => partialFatorial * element, 1);
console.log(factorial);
