// cach viet thong thuong
// var displayColors = function(){
//     for(let i in arguments){
//         console.log(arguments[i]);
//     }
// }

// typescript
let displayColorsSpread = function(messageSpread:string,...colors: string[]){
    console.log(messageSpread);
    for(let i in colors){
        console.log(colors[i]);
    }
}
let messageSpread = "Hello";
let colorsSpread = ['red','green','blue'];
displayColorsSpread(messageSpread,...colorsSpread);
