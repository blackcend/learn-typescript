/**
 * Global context
 **/
// trong web browser, doi tuong window cung la doi tuong global
console.log(this===window);
a = 37;
console.log(window.a);

this.b = "MDN";
console.log(window.b); // MDN
console.log(b); // MDN

/**
 * Function context 
 **/
function f1(){
    return this;
}
// In Browser
f1() === window;
// In Node
// f1() === global;

// Truyen gia tri cua this tu mot context toi mot context khac
var obj = {a:"Custom"};

var a = "Global";

function whatThis(arg){
    console.log(this.a);
}

whatThis(); // => Global
whatThis.call(obj); // => Custom
whatThis.apply(obj); // => Custom