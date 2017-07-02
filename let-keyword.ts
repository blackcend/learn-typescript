function greetPerson(name: any) {
    let greet;
    if (name === "Chanlder") {
        greet = "Hello " + name;
    } else {
        greet = " Hello there";
    }
    console.log(greet);

}

greetPerson("Chanlder");

var a = 1;
// scope global
let b = 2;
if (a === 1) {
    b = 20;
    var a = 100;
}

// let b = 30; => ko the khai bao them ten bien b bang tu khoa let
console.log(a);
console.log(b);