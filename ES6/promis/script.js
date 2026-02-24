// const promiseOne  = new Promise(function(resolve, reject){
//     setTimeout(() =>{
//         console.log("Doing Asynchronous Task");
//         resolve()
//     }, 1000);
// })
// promiseOne.then(function(){
//     console.log("Promise Executed");
// })


// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Doing Another Asynchronous Task");
//         resolve()
//     }, 1000);
// }).then(function(){
//     console.log("Another Promise Executed");
// });


// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Doing Asynchronous Task");
//         resolve({username:"Piyush", id:111});
//     }, 1000);
// });
// promiseOne.then(function(data){
//     console.log("Promise Executed");
//     console.log(data);
//     return data.username
// }).then((username) => {
//     console.log("Username:", username);
// });


// const promiseOne = new Promise((resolve, reject) => {
//     let error = true
//     if(error){
//         resolve({username:"Piyush", id:111})
//     }
//     else{
//         reject("Error Occurred");
//     }
// })
// promiseOne.then

const PromiseOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username:"Piyush Gandi", id:111});
        }
        else{
            reject("Something went wrong");
        }
    }, 3000);
})
async function consumePromise(){
    try{
        const respponse = await PromiseOne
        console.log("Something went wrong")
    }
    catch(error){
        console.log(error)
    }
}

consumePromise()