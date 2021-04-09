"use strict";
// console.log("Hello World");
// function greetPerson(name)
// {
//  let greet;
//     if(name==="chandler")
//     {
//         greet="hi chandler";
//     }
//     else{
//        greet="hi there";
//     }
//     console.log(greet);
// }
// greetPerson("chandler");
// var a=1;
// var b=2;
// if(a===1)
// {
//     var a=10;
//     let b=20;
//     console.log(a);
//     console.log(b);
// }
// console.log(a);
// console.log(b);
// // for(let k=1;k<=5;k++)
// // {
// //     setTimeout(function() {console.log(k)}, 1000)
// // }
// let num1;
// const num2=10;
// const obj1={
//  name:"james"
// };
// console.log(obj1.name);
// obj1.name="john";
// console.log(obj1.name);
// var getRegValue=function()
// {
//     return 10;
// }
// console.log(getRegValue());
// const getArrowValue=(m,bonus) => 50*m+bonus;
// console.log(getArrowValue(3,20));
// console.log(typeof getArrowValue);
// var employee=
// {
//     id:1,
//     greet:function()
//     {
//        setTimeout(() => {console.log(this.id); },1000)            
//     }
// }
// employee.greet();
// let percentBonus=()=>0.1;
// let getValue=function(value=10,bonus=value*percentBonus())
// {
//     console.log(value+bonus);
//     console.log(arguments.length);
// };
// getValue();
// getValue(20);
// getValue(20,30);
// getValue(undefined,50);
// let displayColours=function(message,...colours)
// {
//     console.log(message);
//     // console.log(colours);
//     // console.log(colours.length);
//     // console.log(arguments.length);
//     for(let i in colours)
//     {
//         console.log(colours[i]);
//     }
// }
// let message="display following colors";
// let colourArray=["orange","yellow","indigo"];
// displayColours(message,...colourArray);
// // displayColours(message,'red');
// displayColours(message,'red','blue');
// displayColours(message,'red','blue','green');
// let firstname="ross";
// let lastname="buttler";
// let person={
//     // firstname:firstname,
//     // lastname:lastname
//     firstname,
//     lastname
// };
// function createPerson(firstname,lastname)
// {
//     let fullname=firstname+ " "+ lastname;
//     return
//     { firstname ,lastname,fullname}
// }
// let p=createPerson("paul","marshal");
// console.log(p.firstname);
// console.log(p.lastname);
// console.log(p.fullname);
// console.log(person.firstname);
// console.log(person.lastname);
// let ln="lastname";
// let person=
// {
//     firstname:"Chandler",
//     [ln]:"bing"
// };
// console.log(person);
//destructing array
// let employee=["chandler","bing","female"];
// let[fname,lname,gender="male"]=employee;
// console.log(fname);
// console.log(lname);
// console.log(gender);
//destructuring obj
// let employee={
//     fname:"maya",
//     lname:"shelby",
//     gender:"male"
// };
// let{fname:f,lname:l,gender:g}=employee;
// console.log(f);
// console.log(l);
// console.log(g);
//string templates
//  let user="pragati";
//  let greet= `Welcome  ${user} to ES2015 tutorial
//               this is your first tutorial
//                 please contact on getting difficulty`;
//  console.log(greet);
// let colours=['red','green','yellow'];
// for(let index in colours)
// {
//     console.log(colours[index]);
// }
// for(let color of colours)
// {
//    console.log(color);
// }
// let letters="ABCD";
// for(let letter of letters)
// {
//     console.log(letter);
// }
//  class Person
//  {
//      greet()
//      {}
//  }
//      let p=new Person();
// console.log(p.greet===Person.prototype.greet);
// class Person
// {
//     constructor(name)
//     {
//         this.name=name;
//         console.log(this.name +"constructor");
//     }
//     static staticmethod()
//     {
//         console.log("static method");
//     }
//     greetPerson()
//     {
//         console.log("Hello" +this.name);
//     }
// }
// let p=new Person("chandler");
// Person.staticmethod();
// p.greetPerson();
//inhertance
// class Person
// {
//     constructor(name)
//     {
//         console.log( name +"person constructor")
//     }
//     getID()
//     {
//         return 10;
//     }
// }
// class Employee extends Person{
//     constructor(name)
//     {
//         super(name);
//         console.log(name + "employee construcror");
//     }
//     getID()
//     {
//         return super.getID();
//     }
// }
// let e=new Employee("pavan");
// console.log(e.getID());
// let mySet= new Set();
// let obj1={};
// let obj2={};
// mySet.add(obj1);
// mySet.add(obj2);
// mySet.add("Hello");
// mySet.add(1);
// console.log(mySet.size);
// let newSet=new Set([1,2,3,4,4,4]);
// console.log(newSet.size);
// let chainSet=new Set().add("hello").add("world");
// console.log(chainSet.size);
// console.log(newSet.has(1));
// console.log(newSet.delete(1));
// console.log(newSet.size);
// let myMap =new Map()
// myMap.set("fname","pragati");
// myMap.set("age",30);
// console.log(myMap.get("fname"));
// let obj1={};
// let obj2={};
// myMap.set(obj1,10);
// myMap.set(obj2,20);
// console.log(myMap.size);
// console.log(myMap.has("fname"));
// console.log(myMap.delete("fname"));
// console.log(myMap.size);
// myMap.clear();
// console.log(myMap.size);
// let myMap=new Map([["fname","pragati"],["lname","wankhade"]]);
// for(let key of myMap.keys())
// {
//     console.log(key);
// }
// for(let values of myMap.values())
// {
//     console.log(values);
// }
// let myMap=new WeakMap()
// let obj1={};
// myMap.set(obj1,"hello world");
// console.log(myMap.get(obj1));
// obj1=null;
// let s=Symbol("first symbol");
// console.log(typeof s);
// console.log(s.toString());
// let s2=Symbol("test");
// let s3=Symbol("test");
// console.log(s2===s3);
// let s4=Symbol.for("RegSymbol");
// let s5=Symbol.for("RegSymbol");
// console.log(s4===s5);
// console.log(Symbol.keyFor(s4));
// let fname=Symbol("first symbol");
// let person=
// {
//     [fname]:"Chandler";
// };
// console.log(Object.getOwnPropertyNames(person));
// console.log(Object.getOwnPropertySymbols(person));
//typescript
var x = 10;
var y = "hi";
var z = true;
var a = 10;
// var b:string;
// var n1=10;
// // n1="hi";
// var n2=n1+"Hello";
// console.log(n2);
// var info:any;
// info=10;
// info="hi";
// info=true;
// var information;
// enum EyeColor{brown=1,black=2,blue=5};
// var myEyeColor=EyeColor.blue;
// console.log(myEyeColor);
// console.log(EyeColor[myEyeColor]);
// let strArray1:string[]=["hello","world"];
// let strArray2:Array<string>=["hello","world"];
// let anyArray:any[]=["hi",10,true];
// let myTuple:[string,number]=["hello",20];
// console.log(myTuple[0]);
// console.log(myTuple[1]);
//  myTuple[2]=400;
//  console.log(myTuple[2]);
//# sourceMappingURL=demo.js.map