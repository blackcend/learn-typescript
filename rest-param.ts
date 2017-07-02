// cach viet thong thuong
// var displayColors = function(){
//     for(let i in arguments){
//         console.log(arguments[i]);
//     }
// }

// typescript
let displayColors = function(message,...colors: string[]){
    console.log(message);
    console.log(colors);
    for(let i in colors){
        console.log(colors[i]);
    }
}
let message = "Hello";
displayColors(message,"red");
displayColors(message,"red","green");
displayColors(message,"red","green","yellow");
