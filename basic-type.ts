// kieu boolean
let isOne: boolean = false;
console.log(isOne); 

/**
 * Kieu number co 4 dang
 * decimal
 * hex
 * binary
 * octal
 **/
let decimal:number = 10;
let hex:number = 100;
let binary:number = 200;
let octal:number = 300;
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);

/**
 * Kieu string
 * 1: Basic
 * 2: Expression: co the truyen bien, co the ghi nhieu dong
 **/
let color:string = "blue";
color = "red";
console.log(color);

let fullName:string = "Blackcend";
let age:number = 30;
let sentence:string = `
    Hello, my name is ${fullName}. My age is ${age + 1}.
`;
console.log(sentence);

// Type Array
let list:number[] = [1,2,3]; // or
let list1:Array<number> = [1,2,3];
console.log(list1);

/**
 * Type: Tuple
 * Kieu mang hon hop (array mixed)
 **/
let x: [string,number];
x = ["hello", 10]; // Khoi tao dung
// x = [10,"hello"]; => khoi tao sai
console.log(x[0].substring(1)); // Ok
// console.log(x[1].substring(1)); => vi element thu hai la number
x[3] = "World";
//console.log(x[5].toString()); // Ok, vi ca 2 phan tu deu co ham toString
// x[10] = true; => Error, vi boolean ko phai la "string | number"


// Type: enum
enum Color {Red,Yellow,Blue};
let c: Color = Color.Blue;
console.log(c);

// Type: any => dynamic value
// Type: void => return undefinded or null
// Type: null va undefined
// Type: never => return throw
// Type: assertions
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length; // or other syntax
let strLength1 : number = (someValue as string).length;
console.log(strLength);