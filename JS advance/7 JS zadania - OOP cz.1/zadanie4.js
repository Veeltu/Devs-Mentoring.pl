class Cat {
    name;
    level_hapiness;
    level_hunger;
    level_lonliness;
    constructor(name, level_hapiness, level_hunger, level_lonliness){
        this.name = name;
        this.level_hapiness = level_hapiness;
        this.level_hunger = level_hunger;
        this.level_lonliness = level_lonliness;
    }
     feed (){
     }
     sleep(){
     }
     play(){
     }
     status(){
        console.log(`${this.name} is ${this.level_lonliness} lonliness,${this.level_hunger} hungry and ${this.level_hapiness} happy.` )
     }
}
// not, a bit, very

const Nucia= new Cat ('Nucia', 'not', 'a bit', 'very' )
const Puszek= new Cat ('Puszek', 'very', 'a bit', 'very' )

Nucia.status();
Puszek.status();

