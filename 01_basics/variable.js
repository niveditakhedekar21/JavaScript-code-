const accountId=1234
let accountEmail="nivedita@gmail.com"
var accountPassword=1234
accountCity="Jaipur"
let accountState; // if we not declare value so output will ne undefined

// accountId=2  //constant varible values acnnot be changed
// now we see other variables can change or not


accountEmail="nk@gmail.com"
accountPassword=4567
accountCity="Pune"

/*
prefer do not use var
because of issue in block scope and functional scope
*/ 

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
