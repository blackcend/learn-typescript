var colorName = ['red','blue','yellow'];

// normal
for(let i = 0; i < colorName.length; i++){
    console.log(i);
    console.log(colorName[i]);
} // => 0 red 1 blue 2 yellow

// for...in 
for(let i in colorName){
    console.log(i);
} // => 0 1 2

// for..of 
for(let name of colorName){
    console.log(name);
} // => red blue yellow