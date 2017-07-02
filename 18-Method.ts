class Person1 {
    // Ham khoi tao
    constructor(name:string){
        this.name = name; // do dang su dung es5
        console.log(this.name + " constructor.");
    }
    // static method
    static talk(){
        console.log('This is static method talk.');
    }

    run(){
        console.log('This is running ...');
    }
}

// Khoi tao class
let p = new Person1("Dat"); // => Dat constructor
p.run(); // => This is running ...

// Khong can khoi tao
Person1.talk(); // => This is static method talk

