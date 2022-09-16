
const Point = function (x, y){
    const point = {};
    point.x = x;
    point.y = y;
    point.getX = () => x;
    point.getY = () => y;
    point.moveTo = (x, y) =>{
        point.x = x;
        point.y = y;
    };
    point.toString = () => "Points are: x " + point.x + " and y " + point.y;
    return point;
}


let Circle = function (Point, radius){
    console.log("Arguments: " + arguments.length);
    const circle = {};
    circle.radius = radius;
    circle.point = Point;
    circle.getCenterX = () => circle.point.x;
    circle.getCenterY = () => circle.point.y;
    circle.getRadius = () => circle.radius;
    circle.moveCenterTo = (x, y) => {
        circle.point.x = x;
        circle.point.y = y;
    };
    circle.toString = () => "Circle points are: x " + circle.point.x + " y: " + circle.point.y + ".Radius: "+ circle.radius;
    return circle;
}


const circ =[Circle(Point(5,9), 30), Circle(Point(7,9), 35), Circle(Point(8,11), 45)];
circ.map((c)=> console.log(c.toString()));


//How to overload the constructor?
//Option 1
const circ2 =[Circle = function (x, y, radius) {
    console.log("We can write any logic over here");
}];

// Circle(1,2,3,4,5).toString();

function func1(a, b, c) {
    console.log(arguments[2]);
    // expected output: 1

    console.log(arguments[4]);
    // expected output: 2

    console.log(arguments[3]);
    // expected output: 3
}

func1(1,2,3, 4,6);






