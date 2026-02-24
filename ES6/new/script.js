// function greet(name, callback, callback2){
//     console.log("Hello " + name);
//     callback();
//     callback2();
// }
// function sayBye(){
//     console.log("Bye Bye");
// }
// function sayThanks(){
//     console.log("Thanks");    
// }
// greet("John",sayBye, sayThanks);


function checkLogin(callback) {
    setTimeout(() => {
        console.log("Login Done");
        callback();
    }, 3000);
}

function verifyCart(callback) {
    setTimeout(() => {
        console.log("Cart Verified");
        callback();
    }, 2000);
}

function proceedToPayment(callback) {
    setTimeout(() => {
        console.log("Payment Done");
        callback();
    }, 2000);
}

function placeOrder(callback) {
    setTimeout(() => {
        console.log("Order Placed");
        callback();
    }, 3000);
}

// Callback Hell
checkLogin(() => {
    verifyCart(() => {
        proceedToPayment(() => {
            placeOrder(() => {
                console.log("All steps completed ✅");
            });
        });
    });
});
