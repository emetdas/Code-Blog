let name = "Emet Das";
console.log(name);

let myFun = () => {
    console.log("Emet Das  Developer ");
}
myFun();
console.log(`My Name is ${name}`);
let array = ["Emet", "Das"];
array.forEach((e) => {
    console.log(e);
});


if (module.hot) {
    module.hot.accept()
}