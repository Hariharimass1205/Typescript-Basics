// var __extends = (this && this.__extends) || (function () {
//     var extendStatics = function (d, b) {
//         extendStatics = Object.setPrototypeOf ||
//             ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
//             function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
//         return extendStatics(d, b);
//     };
//     return function (d, b) {
//         if (typeof b !== "function" && b !== null)
//             throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
//         extendStatics(d, b);
//         function __() { this.constructor = d; }
//         d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
//     };
// })();
// var person = /** @class */ (function () {
//     function person(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     person.prototype.greet = function () {
//         return "hello ".concat(this.firstName + this.lastName);
//     };
//     person.prototype.getage = function () {
//         return "".concat(this.age);
//     };
//     return person;
// }());
// var user1 = /** @class */ (function (_super) {
//     __extends(user1, _super);
//     function user1(firstName, lastName, age) {
//         return _super.call(this, firstName, lastName, age) || this;
//     }
//     return user1;
// }(person));
// var admin = /** @class */ (function (_super) {
//     __extends(admin, _super);
//     function admin(firstName, lastName, age, role) {
//         var _this = _super.call(this, firstName, lastName, age) || this;
//         _this.role = role;
//         return _this;
//     }
//     admin.prototype.greet = function () {
//         return "hello ".concat(this.role);
//     };
//     return admin;
// }(person));
// var a = new user1("hari", 'haran', 23);
// var b = new admin("haha", "prea", 45, "admin");
// console.log(a.greet());
// console.log(a.getage());
// console.log(b.greet());
// console.log(b.getage());
