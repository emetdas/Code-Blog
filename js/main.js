"use strict";

var name = "Emet Das";
console.log(name);

var myFun = function myFun() {
  console.log("Emet Das  Developer ");
};

myFun();
console.log("My Name is ".concat(name));
var array = ["Emet", "Das"];
array.forEach(function (e) {
  console.log(e);
});

if (module.hot) {
  module.hot.accept();
}