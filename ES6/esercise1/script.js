//1. Store a users age (the value may change later)
var age = 40;
console.log(age);

//2. store the value of Pi
const pi = 3.14;
console.log(pi);

//3. loop counter variable
let i=0;
while(i<5){
    console.log("Iteration: " + i);
    i++;
}

//4. an application configuration object where properties may change, but the whole object should not be replaced
const appConfig = {
    name1:"PRASHANT",
    age: 20,
    greet:function(){
        console.log("my name is "+ this.name1);
    }
}
appConfig.greet();

console.log();

//lexical scope 
let a=5;
function outter(){
    let b=10;
    function inner(){
        let c=15;
        console.log("Hello from inner function");
        console.log(a ,b ,c);
    }
    inner();
}
outter();

// prime number or not
let n=12;
let flag=false;
for(let i=2;i<n;i++){
    if(a%i==0){
        flag=true;
        break;
    }
}
if(flag==true){
    console.log(n+ " is not prime");
}
else{
    console.log(n+ " not prime");
}

//
const student ={
    classStudent:[
        {name:"rajat", marks:35},
        {name:"prince", marks:65},
        {name:"john", marks:80},
        {name:"don", marks:25},
        {name:"ram", marks:30},
        {name:"sham", marks:40},
    ]
}

let k=student.classStudent.length
let min=101;
let max=0;
for(let i=0;i<k;i++){
    if(student.classStudent[i].marks>max){
        max=student.classStudent[i].marks;
    }
    else if(student.classStudent[i].marks<min){
        min=student.classStudent[i].marks;
    }
}

console.log(min)
console.log(max)

student.classStudent.sort((a, b) => {
  return a.name.localeCompare(b.name);
});

console.log(student.classStudent);
