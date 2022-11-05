// Mając do dyspozycji poniższą tablicę:

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Posortuj listę i znajdź wartość minimalną oraz maksymalną
// Oblicz średnią wieku
// Oblicz przedział wieków (różnica między max a min)
// ----------------------------------------------------------//

const ages= [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();
console.log(ages);

let min = ages[0];
for (let i = 0; i < ages.length; i++){
    if (ages[i] < min){
        min = ages[i];
    }
}
console.log(min);

let max = ages[0]
for (let i = 0; i < ages.length; i++){
    if (ages[i] > max ){
        max = ages[i];
    }
}
console.log(max);




let sum = 0;
function makeSum(){
    for (let i = 0; i< ages.length; i++){
        sum += ages[i];
    }
}
function makeAverage(){
    average = Math.round(sum / ages.length);
}
makeSum();
makeAverage();
console.log(sum);
console.log(average);

let ageRange = max - min;
console.log(ageRange);