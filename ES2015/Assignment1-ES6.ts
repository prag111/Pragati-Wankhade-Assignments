console.log("1.constants");
const PI =3.14;
console.log("Value of PI cannot changed within program " +PI);

// const a=1;
if(a===1){
    let a='Hello';
    console.log(a);
}
console.log(a);







console.log("2.scoping");
var a=20;
var b=10;
if(a>b)
{
    let p=50;
    let q=70;
    console.log("values of p is :"+p);
}
// console.log("values of p is :"+q);







console.log("3.Enhanced object properties");
var Order=
{
    id:101,
    title:"grocery",
    price:3000 , 
    printOrder:function()
    { 
        return `Id is :${this.id} Title is : ${this.title} Price is ${this.price}`;
    },
    getPrice:function()
    {
       return this.price ;
    }
    };
   console.log(Order.printOrder());
   console.log(Order.getPrice());

const copyOrder= Object.assign({},Order);
console.log(copyOrder);



console.log("4.Arrow functions");

let names=['Tom','Iavn','Jerry'];
let array1=names.map((str1)=>({name:str1, length: str1.length}));
    
console.log(array1);





console.log("5.Extended parameter handling");
//a

let add=function(a=20,b=50)
{
    console.log(a+b);
}
add();
add(undefined,40);





//b
let userFriends=function(username,...friends)
{

    console.log("username is:" +username);
    console.log("list of friends is as follows:");
    for(let i in friends)
    {
        console.log(friends[i]);
        
 
    }
}

userFriends('anam99','john','nancy','pratik');

userFriends('sohail40','pratik','anam','saish','pooja');

userFriends('saish20','nancy','john','clay','ross','zack');




//c
let printCapitalNames=function(title,...names)
{
   console.log(title);
   for(let i in names)
   {
       
       console.log(names[i]);
   }
}
let title="Display names in uppercase";
let arrayOfCities=['jaipur','nagpur','kolhapur','aurangabad'];
arrayOfCities = arrayOfCities.map(function(x){ return x.toUpperCase(); })
printCapitalNames(title,arrayOfCities);







console.log("6.Template literals");
let model="HP Elitebook";
let deskNo=301;
let myName="Sara";

let ticket= `Hii sysnet, there's system update for my machine!!
                My laptop model is ${model}
                desk number is ${deskNo}
                My name is ${myName}`;


console.log(ticket);
                






console.log("7. Destructuring assignment");
//destructing array
let person=["John","Green" ,"author","Fault in our stars"];
let[fname,lname,profession,book]=person;
console.log(person[2]);



let organisation={
    organisationName:"ICMR",
    address:{
        city:"New Delhi",
        pincode:"110001",
    },
}
let {organisationName,address:{city,pincode}} = organisation;
console.log(pincode);











console.log("8.class and modules");
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