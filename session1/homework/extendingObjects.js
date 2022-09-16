
let Person = function (name, age){
    this.name = name;
    this.age = age;
    this.getName = () => this.name;
    this.setName= (name) => this.name = name;
    this.getAge = () => this.age;
    this.setAge = (age) => this.age = age;
    this.toString = () => "Name: " + this.name + " Age: "+ this.age;
    this.equals = (person) => this.name === person.name && this.age === person.age
}

let Employee = function (salary){
    this.salary = salary;
    this.getSalary = () => this.salary;
    this.setSalary = (salary) => this.salary = salary;
    this.toString = () => "Salary: " + this.salary;
    this.equals = (employee) => this.salary === employee.salary;
}

let pers1 = new Person("Igor", 23);
let emp1 = new Employee(1000);

console.log(emp1.equals(emp1));
employee = {...pers1, salary: emp1.salary, getSalary: emp1.getSalary, setSalary: emp1.setSalary, toString: ()=>  pers1.toString() + " " + emp1.toString(), equals: (employee)=> pers1.equals(employee) && emp1.equals(employee)};

console.log(employee.toString())
console.log(employee.equals(employee));
