var a  = [1,2,3,5,8];
console.log("Length: " + a.length);
console.log("6th element is: " + a[5]);

a.forEach((element) => {
    console.log(element);
});

const sum = a.reduce((partialSum, element) => partialSum + element, 0);
console.log("Sum: " + sum);

console.log("Sum got from the function: " + returnSum(a));

function returnSum(a){
    let sum = 0;
    a.map((element) => {
        sum+= element;
    })
    return sum;
}

a[8] = 55;
console.log("Eight element: " + a[8]);
console.log("New length: " + a.length);
console.log("Printing a: " + a);

a.forEach((element) => {
    console.log("New eleement: " + element);
});