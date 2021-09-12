// arguments object - no longer bound with arrow functions

const add = (a,b) => {
   // console.log(arguments);
    return a+b;
};
console.log(add(55,10));



// this keyword - no longer bound with arrow functions
const user = {
    name : 'Dish',
    cities: ['nsk','pune','mumbai'],
    printPlacesLived(){

        return this.cities.map((city)=>this.name + " lived in " + city);
    return cityMessages;
    } 
};

console.log(user.printPlacesLived());

// challenge
const multiplier ={
    numbers: [1,2,3,4,5],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((eachNumber) => eachNumber*this.multiplyBy );
    }
};
console.log(multiplier.multiply());