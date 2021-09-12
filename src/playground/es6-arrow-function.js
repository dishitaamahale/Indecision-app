function square(x){
    return x*x;
};

// const squareArrow = (x) => {
//   return x*x;
// };

const squareArrow = (x) => x*x;


console.log(square(8));
console.log(squareArrow(5));


// challenge
const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};
console.log(getFirstName("Dishitaa Mahale"));

const getFirstName1 = (fullName) => fullName.split(' ')[0];
console.log(getFirstName1("Dishi Mahale"));