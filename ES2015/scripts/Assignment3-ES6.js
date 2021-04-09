"use strict";
// //1
// console.log("promise");
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
var p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('The first promise has resolved');
        resolve(10);
    }, 1 * 1000);
});
var p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('The second promise has resolved');
        resolve(20);
    }, 2 * 1000);
});
Promise.all([p1, p2])
    .then(function (results) {
    var total = results.reduce(function (p, c) { return p + c; });
    console.log("Results: " + results);
    console.log("Total: " + total);
});
//     console.log("2.class and modules");
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
var circle = {
    radius: 40
};
console.log("Circle Object ");
console.log(circle.radius);
var employee = {
    firstName: "Chandler",
    lastName: "Bing"
};
console.log("Employee  Object ");
console.log(employee.firstName);
console.log(employee.lastName);
//# sourceMappingURL=Assignment3-ES6.js.map