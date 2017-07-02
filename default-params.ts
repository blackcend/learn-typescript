let getPercent = ()=>2; // truyen function vao tham so cua mot function khac
let getBonus = function(value = 10,tax = value * getPercent(),salary : any){
    console.log(value + tax + " : " + salary);
    // dem tham so
    console.log(arguments.length);
}

// Truyen gia tri ban dau
getBonus();
// Truyen nhieu tham so
getBonus(40); // => 60, default tax = 20
getBonus(undefined, 40); // => 50, default value = 10
getBonus(30,50); // => 80, 2 gia tri moi
getBonus(12,20,30);
