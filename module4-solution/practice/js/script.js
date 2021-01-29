//Immediately Invoked Function Expression
//IIFE
(function (name){
  console.log("Hello " + name);
})("Coursera!");


//Closures
// function makeMultiplier (multiplier){
  
//   function b() {
//     console.log("Multiplier is: " + multiplier);
//   }
//   b();
  
//   return (
//     function (x) {
//       return multiplier *x;
//     }
//   );
// }

// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(10));










//Short hand array creation

// var names = [
//   "Yaakov",
//   "John",
//   "Joe"];
// console.log(names);

// for (var i=0; i<names.length; i++) {
//   console.log("Hello " + names[i]);
// }

// names[100]="Jim";

// for (var i=0; i<names.length; i++) {
//   console.log("Hello " + names[i]);
// }


// var names2 = [
//   "Yaakov",
//   "John",
//   "Joe"];

// var myObj = {
//   name: "Yaakov",
//   course: "HTML/CSS/JS",
//   platform:"Coursera"
// };

// for (var prop in myObj){
//   console.log(prop);
//   console.log(prop + ":" +myObj[prop]);
// }

// for(var getname in names2){
//   console.log(getname);
//   console.log("Hello " + names2[getname]);
// }

// names2.greeting = "Hi!";

// for (var name in names2){
//   console.log("Hello " + names2[name]);
// }


//Arrays

// var array= new Array();
// array[0] = "Yaakov";
// array[1]= 2;
// array[2]=function(name){
//   console.log("Hello " + name);
// }
// array[3]= {course: " HTML, CSS , & JS"};

// console.log(array);
// console.log(array[1]);
// array[2](array[0]);
// console.log(array[3].course);




//Object literals and "this"

// var literalCircle = {
//   radius:10,
//   getArea: function() {
//     var self=this;

//     console.log(this);

//     var increaseRadius= function() {
//       self.radius=20;
//     };
//     increaseRadius();
//     console.log(this.radius);
//     return Math.PI * Math.pow(this.radius,2);
//   }
// };

// console.log(literalCircle.getArea());



//Function constructors
// function Circle(radius){
//   this.radius=radius;
// }
// Circle.prototype.getArea =
//   function(){
//   return Math.PI* Math.pow(this.radius,2);
// }

// var myCircle=new Circle(10);
// console.log(myCircle);

// var myOtherCircle = new Circle(20);
// console.log(myOtherCircle.getArea());










//Copy by Reference vs by Value

// var a =7;
// var b =a;

// console.log("a: " + a);
// console.log("b: " + b);

// b=5;
// console.log("after b update:");
// console.log("a: " + a);
// console.log("b: " + b);


// var a= {x:7};
// var b=a;
// console.log(a);
// console.log(b);

// b.x=5;
// console.log("after b.x update: ");
// console.log(a);
// console.log(b);

// function changePrimitive(primValue){
//   console.log("in changePrimitive...");
//   console.log("before:");
//   console.log(primValue);

//   primValue=5;
//   console.log("after:");
//   console.log(primValue);
// }

// var value=7;
// changePrimitive(value);
// console.log("after changePrimitive, orig value: ")
// console.log(value);


// function changeObject(objValue){
//   console.log("in changeObject...");
//   console.log("before: ");
//   console.log(objValue);

//   objValue.x=5;
  
//   console.log("after:");
//   console.log(objValue);
// }
// value={x:7};
// changeObject(value);
// console.log("after changeObject, orig value: ");
// console.log(value);




// function multiply(x,y) {
//   return x*y;
// }
// multiply.version ="v.1.0.0";
// console.log(multiply.version);



//Function factory
// function makeMultiplier(multiplier) {
//   var myFunc = function (x){
//     return multiplier * x;
//   };

//   return myFunc;
// }

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));

// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));

// //Passing functions as arguments
// function doOperationOn(x,operation){
//   return operation(x);
// }

// var result = doOperationOn(100,doubleAll);
// console.log(result);


//Object literal
// var facebook = {
//   name: "Facebook",
//   ceo: {
//     firstName: "Mark",
//     favColor: "blue"
//   },
//   "stock of company":110

// };

// console.log(facebook.ceo.firstName);



// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName="Mark";
// company.ceo.favColor = "blue";

// console.log(company);
// console.log("Conpany CEO name is: " + company.ceo.firstName);

// console.log(company["name"]);

// var stockPropName ="$stock of company"
// company[stockPropName] = 110;

// console.log(company);
// console.log("Stock price is: " + company[stockPropName]);