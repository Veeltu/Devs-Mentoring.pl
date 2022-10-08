// let water_canister = 1000;

// const Vessel_1 = 100;
// const Vessel_2 = 200;
// const Vessel_3 = 50;
// const Vessel_4 = 3000;
// const Vessel_5 = 280;
// console.log(water_canister)
// water_canister = water_canister - Vessel_1

// console.log(water_canister)
// water_canister = water_canister - Vessel_2
// console.log(water_canister)
// water_canister = water_canister - Vessel_3
// console.log(water_canister)
// water_canister = water_canister - Vessel_4
// console.log(water_canister)
// water_canister = water_canister - Vessel_5
// console.log(water_canister)

// upgrade

const naczynia = new Map();
let water_canister = 1000;

const Vessel_1 = 100;
const Vessel_2 = 200;
const Vessel_3 = 50;
const Vessel_4 = 3000;
const Vessel_5 = 280;
naczynia.set('Vessel_1','20')
naczynia.set('Vessel_2','150')
naczynia.set('Vessel_3','120')
naczynia.set('Vessel_4','300')
naczynia.set('Vessel_5','2000')

naczynia.forEach(element => {
    water_canister= water_canister - element;
    if(water_canister<0){
        water_canister ="empty";
    } 
});

console.log(naczynia)
console.log(water_canister)
