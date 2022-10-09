// Zad 2.

// Stwórz klasę WaterVessel, która będzie zawierała takie pola jak: 
// id, 
// volume (objętość naczynia), 
// Water_volume (objętość jaką zajmuje woda w obiekcie takie klasy). 

// Następnie utwórz listę 5 obiektów WaterVessel o losowej pojemności z przedziału 50 - 200 i Water_volume równym 0. 

// Zdefiniuj zmienną Water_canister = 1000, która będzie odzwierciedlała całkowitą do rozlania ilość wody między naczyniami. 
// Proces rozlewania wody ma następować po równo do każdego z naczyń, dopóki nie zostaną one w pełni napełnione lub dopóki Water_canister wyniesie 0. 


// ver. 1 - simple


class WaterVessel {
    id;
    volume;
    Water_volume;
    constructor(id,volume,Water_volume){
    this.id = id;
    this.volume = volume;
    this.Water_volume = Water_volume;

    }
    get id(){
        return this.id;
    }
    get volume(){
        return this.volume;
    }
    get Water_volume(){
        return this.Water_volume;
    }
}

const Vessel_1 = new WaterVessel('1', 50, 0);
const Vessel_2 = new WaterVessel('2', 400, 0);
const Vessel_3 = new WaterVessel('3', 140, 0);
const Vessel_4 = new WaterVessel('4', 400, 0);
const Vessel_5 = new WaterVessel('5', 400, 0);

const list = [Vessel_1, Vessel_2, Vessel_3, Vessel_4, Vessel_5];

let Water_canister = 600;


var sorted_list = list.sort((a, b) => b.volume-a.volume);
let biggestVessel = sorted_list[0];


// while działa dopoki co najmniej jeden warunek jest true ( ||), po ! stop jeśli conajmniej jeden warunek jest true;
while(!(biggestVessel.Water_volume == biggestVessel.volume || Water_canister<=0)){
    list.forEach(eWaterVessel => {
       if(eWaterVessel.Water_volume<eWaterVessel.volume && Water_canister>0){
        // add 1 to Water_volume
        eWaterVessel.Water_volume += 1;
        Water_canister -= 1;
    }});
}
console.log(list);

let sum = 0;    
list.forEach(e => sum+= e.Water_volume);
console.log(sum);

//git test add



