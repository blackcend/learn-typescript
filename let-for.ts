/**
 * Khai bao bien bang var
 * Ham setTimeOut chay tre 1s in ra bien i
 * Do ham setTimeout chay tre 1s nen bien i van duoc thuc hien la + 1
 * truoc khi ham setTimeout ket thuc
 * /
// for(var i = 1; i <= 5; i++){
//     setTimeout(()=>{
//         console.log(i);
//     },1000);
// } => i = 1,2,3,4,5,6

/**
 * Fix bug: Cach 1
 * Thay vi khai bao bang var 
 * thi khai bao bien i bang let
 * Ket qua: i = 1,2,3,4,5
 * */
for(let i = 1; i <= 5; i++){
    setTimeout(()=>{
        console.log("i: " + i);
    },1000);
}
/**
 * Fix bug: Cach 2
 * Goi ham truc tiep (immediately) 
 * Ket qua: i = 1,2,3,4,5
 **/
for(var y = 1; y <= 10; y++){
    ((x)=>{
        setTimeout(()=>console.log("y: " + x),1000);
    })(y);
}