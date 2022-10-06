function order(){
    console.log("Your order procceding...");
    setTimeout(()=>{
        console.log("Order Completed.")
    }, 3000);
}

console.log("What do you want?");
order();
console.log("We are sorry for delay..");