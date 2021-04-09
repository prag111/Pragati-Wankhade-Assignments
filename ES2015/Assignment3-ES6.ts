// //1
// console.log("promise");


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');

        resolve(10);
    }, 1 * 1000);

});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has resolved');
        resolve(20);
    }, 2 * 1000);
});

Promise.all([p1, p2])
    .then(results => {
        const total = results.reduce((p, c) => p + c);

        console.log(`Results: ${results}`);
        console.log(`Total: ${total}`);
    });











//     console.log("2.class and modules");
class Account {
    

    constructor(id, name, balance){
        this.id=id;
        this.name=name;
        this.balance=balance;
        totalBalance.push(balance);
    }
}

class SavingsAccount extends Account{
    interest: any;
    constructor(id, name, balance, interest){
        super(id, name, balance);
        this.interest=interest;
    }
}

class CurrentAccount extends Account{
    cashCredit: any;
    constructor(id, name, balance, cashCredit){
        super(id, name, balance);
        this.cashCredit = cashCredit;
    }
}

var totalBalance= [];

let cc1 = new CurrentAccount(1, "a", 1000, 400);
let cc2 = new CurrentAccount(2, "b", 2000, 400);
let cc3 = new CurrentAccount(3, "c", 5000, 400);
 
let s1 = new SavingsAccount(6, "x", 10000, 5);
let s2 = new SavingsAccount(6, "y", 6000, 6);
let s3 = new SavingsAccount(6, "z", 8000, 7);

function totalBankBalance(){
    console.log(totalBalance.reduce((a,b)=> a + b, 0));
}

totalBankBalance();









//3
interface Printable { 
    firstName?:string, 
    lastName?:string, 
    radius?:number;
 } 
 
 var circle:Printable = { 
    
    radius:40
 }
 
 console.log("Circle Object ")
 console.log(circle.radius) 
  
 
 var employee:Printable = { 
    firstName:"Chandler",
    lastName:"Bing"
    
 } 
   
 console.log("Employee  Object ") 
 console.log(employee.firstName);
 console.log(employee.lastName);

