class TeamMU {
    constructor(name:string){
        //console.log(name + " Manager TeamMU.");
    }

    getName(){
        console.log("Manchester United");
    }
}

class PersonOfTeamMU extends TeamMU {
    // ke thua bien name
    constructor(name:string){
      super(name); // ke thua ham constructor tu TeamMU
      console.log(name + " Member of TeamMU");
    }
    // ke thua phuong thuc
    getName(){
        return super.getName();
    }
}

//let tmu = new TeamMU("Ferguson"); // => Ferguson TeamMU constructor
let pot = new PersonOfTeamMU("Ronaldo"); // => Ronaldo TeamMU constructor
pot.getName(); // => Manchester United

