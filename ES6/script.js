// // document.writeln("Hello, World!");
// var a = 5;
// console.log("This is a log message.");
// console.log(a);

// var b=10;

// // funtion scope var keyword
// function show(){
//     console.log(b);
// }

// show();

// function varTest(){
//     if(true){
//         // let is blocked scope
//         let c=10;
//     }
//     console.log(c);
// }
// varTest();

// // const is fixed scope
// const pi=3.14;


// class-> Propert, behaviour
// student is class; name1 is behaviour; 
// const student = {name1: "Prashant"};
// console.log(student.name1);

// // reference do not abel to change 
// // const student = {name1: "sunny"};
// // console.log(student.name1);

// student.name1 = "Peeyush";
// console.log(student.name1);

// const student = {
//     name1: "Prashant",
//     greet:function(){
//         console.log("Hello, " + this.name1);
//     }
// };
// student.greet();


// template literals
// let name= "kevin"
// //console.log(name)
// let last="elevin"
// //console.log(last)
// //console.log(name+" "+last)

// // backtick
// console.log(`hello my name is ${name} ${last}`)

// let msg=`hello dear papa welcome to the my room `
// console.log(msg)

// // const add = function(a, b){
// //     return a+b
// // }

// // arraw function
// const add = (a, b) => a+b

// console.log(add(2,3))

// let a = 9
// let b = 7
// console.log(`the sum of ${a} and ${b} is $${a+b}`)

// const obj = {
//     name : "kevin",
//     age : 20,
//     welcome : function(){
//         console.log("my name is ", this.name, "and age is ", this.age)
//     }
// };

// obj.welcome();
// // change the context 
// obj.name = "elevin"
// obj.age = 11

// obj.welcome();

// function abc(){
//     name="papa"
//     console.log(name)
// }
// abc()

// there are 2 type of mode  1-strict 2-unstrict
// let this. ko pahachan rha nhi
// function abc() {
//     let a=10
//     console.log(this.a)
// }

// function abc() {
//     let a=10
//     console.log(a)
// }
// abc();

// let frnction_name = (argument, argument, ...) => expression
// let add(a,b) => {name: "kevin"}
// console.log(add(2,3))

// const obj = {
//     name:"ram",
//     normalFu: function(){
//         console.log(this.name);
//     },
//     arrowFu: () => {
//         console.log(this.name);
//     }
// };
// obj.normalFu();
// obj.arrowFu();

// const obj = {
//     name:"ram",
//     showname : function(){
//         const arrowfun = () => {
//             console.log(this.name);
//         }
//         arrowfun();
//     }
// };
// obj.showname();

// calculator

// Arrow functions for calculator operations

// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const divide = (a, b) => {
//     if (b === 0) {
//         return "Error: Cannot divide by zero";
//     }
//     return a / b;
// };

// Using the calculator
// console.log(add(10, 5));        // 15
// console.log(subtract(10, 5));   // 5
// console.log(multiply(10, 5));   // 50
// console.log(divide(10, 5));     // 2
// console.log(divide(10, 0));     // Error

// const calculator = (a, b, operator) => {
//     switch (operator) {
//         case "+":
//             return a + b;
//         case "-":
//             return a - b;
//         case "*":
//             return a * b;
//         case "/":
//             return b !== 0 ? a / b : "Error: divide by zero";
//         default:
//             return "Invalid operator";
//     }
// };
// // Using the calculator

// console.log(calculator(8, 2, "+")); // 10
// console.log(calculator(8, 2, "-")); // 6
// console.log(calculator(8, 2, "*")); // 16
// console.log(calculator(8, 2, "/")); // 4

// object desctruturing
// const student = {
//     id: 21,
//     Name: "Pranjal",
//     Course: "Btech",
//     address: {
//         city: "Lucknow",
//         country: "India"
//     },
//     marks: [1, 2, 3, 4],
//     admissionStatus: "Pass"
// };

// function displayDate({
//     id,
//     Name,
//     Course,
//     address: { city, country },
//     marks: [m1, m2, m3, m4],
//     admissionStatus
// }) {
//     console.log("ID:", id);
//     console.log("Name:", Name);
//     console.log("Course:", Course);
//     console.log("City:", city);
//     console.log("Country:", country);

//     console.log("English Marks:", m1);
//     console.log("Maths Marks:", m2);
//     console.log("Science Marks:", m3);
//     console.log("Hindi Marks:", m4);

//     const averageMarks = (m1 + m2 + m3 + m4) / 4;
//     console.log("Average Marks:", averageMarks);

//     if (averageMarks >= 40) {
//         console.log("Result: PASS ✅");
//     } else {
//         console.log("Result: FAIL ❌");
//     }

//     console.log("Admission Status:", admissionStatus);
// }

// displayDate(student);

// array desctruturing
// let num = [1,2,3,4,5];
// let[a,b,c,d,e]=num;
// console.log(a);
// console.log(e);

// let color = ["red","green","yellow","blue","brown"];
// let[v,w,x,y,z] = color;
// console.log(w);
// console.log(y);


// const student = {
//     name:"Prashant",
//     age:20,
//     city:"Ghaziabad"
// };
// function showStudent({name, age, city}){
//     console.log(name);
//     console.log(age);
//     console.log(city);
// }
// showStudent(student);

// LAB: 02
// const studentDetail = {
//     id:186,
//      name:"Prashnat",
//      course:"CS",
//      address: {
//         city:"Ghaziabad",
//         country:"India"
//      },
//      marks:[1, 2, 3, 4],
//      admissionstatus:"counsiling"
// };
// function displayData({id, name, course, address, marks, admissionstatus}){
//     console.log("ID: ", id);
//     console.log("NAME: ", name);
//     console.log("COURSE: ", course);
//     console.log("ADDRESS: ", address.city+","+address.country);
//     console.log("MARKS: ", marks[0] ,marks[1], marks[2] ,marks[3]);
//     console.log("TYPE: ", admissionstatus);
//     //avg marks
//     let avg=marks[0]+marks[1]+marks[2]+marks[3]/4;
//     // for(let i=0;i<length.marks;i++){
//     //     avg=avg+marks[i];
//     // }
//     console.log("Average marks: ", avg);

//     if(avg>=80){
//         console.log("PASS");
//     }
//     else{
//         console.log("FAIL");
//     }
// }
// displayData(studentDetail);

// // fins max number
// let nums= [50,40,90];
// const greatest = ([a,b,c]) => {
//     if(a>b && a>c){
//         return a;
        
//     }
//     else if(b>a && b>c){
//         return b;
//     }
//     else{
//         return c;
//     }
// }
// console.log(greatest(nums));

// let num = [1,2,3,4,5,6];
// let ans =0;
// for(let i=0;i<num.length;i++){
//     if(num[i]%2==0){
//         ans=ans+num[i]**2;
//         console.log(num[i]," ");
//     }
// } 
// console.log(ans);


// oldarray = [1,2,3,4,5];
// newarray = ["A","B",...oldarray,6,7,8,9];
// console.log(newarray);


// function add(a,b,c){
//     return a+b+c;
// }
//- console.log(add(1,2,3));
// numbers=[1,2,3];
// console.log(add(...numbers));


// const csStudent = ["ram","shyam","anuj"];
// const itStudent = ["rajat","prashant","pranjal"];
// const allStudent = [...csStudent,...itStudent];
// console.log(allStudent);


// //rest
// const sum = (...num) => {
//     total = 0;
//     num.forEach((n) => {
//         total+=n;
//     })
//     console.log(total);
// }
// sum(1,2,3,4,5,6,7,8,9);


// function showDetails(name, ...skills){
//     console.log(name);
//     console.log(skills);
// }
// showDetails("kevin", "js", "Dart", "java");


// // default values
// let marks = [80]; 
// let [math = 0, science = 0] = marks; 
// console.log(math); // 0
// console.log(science);  // 0

// let data = []; 
// let [a = 10, b = 20] = data; 
// console.log(a); // 10
// console.log(b); // 20

// // let data = [0, null];
// // let [a = 10, b = 20] = data;

// let product = {
// name: "Laptop"
// };
// let { name, price = 0 } = product;
// console.log(name);
// console.log(price);


// console.log("Starting my calculaton")
// function calculation(){
//     for(let a=0;a<=le10;a++){

//     }
// }
// calculation();


console.log("hello");
setTimeout(function(){
    console.log("Delayed message");
}, 6000);

console.log("hello");