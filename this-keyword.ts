class Employee {
    id:number = 1;
    name:string = "Blackcend";
    greet = ()=>{
        // this dai dien cho Employee
        console.log(this.id);
        setTimeout(()=>{
            console.log(this.name);
        },1000)
    }
}

let em = new Employee();
em.greet();

let mobile = {
    name: "Iphone",
    price: 3000000,
    mobile:function(){
        //let seft = this;
        console.log(this.name);
        setTimeout(()=>{
            console.log(this.price);
        },1000)
    }
}
mobile.mobile();

