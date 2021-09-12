
class Person {
    constructor(name = "anonymous", age=0) {
        this.name = name;
        this.age = age;
    }
    // no , after constructor closing
    getGretting() {
        //return "Hi I am " + this.name +"!";
        return `Hi I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
} 


// student is a subclass
class Student extends Person {
    constructor(name ,age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription() { // overriding
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += ` Major is ${this.major}`;
        }

        return description;
    }
}

class Traveller extends Person{
    constructor(name,age,homelocation){
        super(name, age);
        this.homelocation = homelocation;
    }
    //overriding
    getGretting() {
        let loc = super.getGretting();

        if(this.homelocation) {
            loc += `Location is ${this.homelocation}`;
        }

        return loc;
    }
}

const me = new Traveller("Dishitaa Mahale",19, "Nashik");
console.log(me.getGretting());

const other = new Traveller();
console.log(other.getGretting());

/*
class challenge1 {
    constructor(name1="---" , age=0){
        this.name1=name1;
        this.age=age;
    }
    getDescription() {
        return `${this.name1} is ${this.age} years old.`
    }
}
const challenge_1 = new challenge1("Dishi",19);
console.log(challenge_1.getDescription());
*/