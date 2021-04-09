"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("1.constants");
var PI = 3.14;
console.log("Value of PI cannot changed within program " + PI);
// const a=1;
if (a === 1) {
    var a_1 = 'Hello';
    console.log(a_1);
}
console.log(a);
console.log("2.scoping");
var a = 20;
var b = 10;
if (a > b) {
    var p = 50;
    var q = 70;
    console.log("values of p is :" + p);
}
// console.log("values of p is :"+q);
console.log("3.Enhanced object properties");
var Order = {
    id: 101,
    title: "grocery",
    price: 3000,
    printOrder: function () {
        return "Id is :" + this.id + " Title is : " + this.title + " Price is " + this.price;
    },
    getPrice: function () {
        return this.price;
    }
};
console.log(Order.printOrder());
console.log(Order.getPrice());
var copyOrder = Object.assign({}, Order);
console.log(copyOrder);
console.log("4.Arrow functions");
var names = ['Tom', 'Iavn', 'Jerry'];
var array1 = names.map(function (str1) { return ({ name: str1, length: str1.length }); });
console.log(array1);
console.log("5.Extended parameter handling");
//a
var add = function (a, b) {
    if (a === void 0) { a = 20; }
    if (b === void 0) { b = 50; }
    console.log(a + b);
};
add();
add(undefined, 40);
//b
var userFriends = function (username) {
    var friends = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        friends[_i - 1] = arguments[_i];
    }
    console.log("username is:" + username);
    console.log("list of friends is as follows:");
    for (var i in friends) {
        console.log(friends[i]);
    }
};
userFriends('anam99', 'john', 'nancy', 'pratik');
userFriends('sohail40', 'pratik', 'anam', 'saish', 'pooja');
userFriends('saish20', 'nancy', 'john', 'clay', 'ross', 'zack');
//c
var printCapitalNames = function (title) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log(title);
    for (var i in names) {
        console.log(names[i]);
    }
};
var title = "Display names in uppercase";
var arrayOfCities = ['jaipur', 'nagpur', 'kolhapur', 'aurangabad'];
arrayOfCities = arrayOfCities.map(function (x) { return x.toUpperCase(); });
printCapitalNames(title, arrayOfCities);
console.log("6.Template literals");
var model = "HP Elitebook";
var deskNo = 301;
var myName = "Sara";
var ticket = "Hii sysnet, there's system update for my machine!!\n                My laptop model is " + model + "\n                desk number is " + deskNo + "\n                My name is " + myName;
console.log(ticket);
console.log("7. Destructuring assignment");
//destructing array
var person = ["John", "Green", "author", "Fault in our stars"];
var fname = person[0], lname = person[1], profession = person[2], book = person[3];
console.log(person[2]);
var organisation = {
    organisationName: "ICMR",
    address: {
        city: "New Delhi",
        pincode: "110001",
    },
};
var organisationName = organisation.organisationName, _a = organisation.address, city = _a.city, pincode = _a.pincode;
console.log(pincode);
console.log("8.class and modules");
var Account = /** @class */ (function () {
    function Account(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
        totalBalance.push(balance);
    }
    return Account;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(id, name, balance, interest) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.interest = interest;
        return _this;
    }
    return SavingsAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(id, name, balance, cashCredit) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.cashCredit = cashCredit;
        return _this;
    }
    return CurrentAccount;
}(Account));
var totalBalance = [];
var cc1 = new CurrentAccount(1, "a", 1000, 400);
var cc2 = new CurrentAccount(2, "b", 2000, 400);
var cc3 = new CurrentAccount(3, "c", 5000, 400);
var s1 = new SavingsAccount(6, "x", 10000, 5);
var s2 = new SavingsAccount(6, "y", 6000, 6);
var s3 = new SavingsAccount(6, "z", 8000, 7);
function totalBankBalance() {
    console.log(totalBalance.reduce(function (a, b) { return a + b; }, 0));
}
totalBankBalance();
//# sourceMappingURL=Assignment1-ES6.js.map