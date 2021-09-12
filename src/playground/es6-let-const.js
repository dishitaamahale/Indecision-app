var nameVar = "aaaa";
var nameVar = "bbbb";
console.log("namevar" , nameVar);

let nameLet = "Dishi";
nameLet="di";
console.log("nameLet" , nameLet);

const nameConst = "moka";
console.log("nameConst" , nameConst);

// block scoping 

const fullName = "Dishitaa Mahale";
let firstName;
if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);

