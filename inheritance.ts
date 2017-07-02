class Animal {
    constructor (public name: string){}
    move(distanceInMeters:number = 0){
        console.log(`${this.name} move ${distanceInMeters}m`);
    }
}

class Snake extends Animal{
    constructor(name:string){super(name);}
    move(distanceInMeters = 5){
        console.log("Slithering ...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name:string){super(name);}
    move(distanceInMeters = 50){
        console.log("Galloping ...");
        super.move(distanceInMeters);
    }
}

let ran = new Snake("ran");
let ngua = new Horse("ngua");
console.log(ran);
ran.move();
console.log(ngua);
ngua.move();