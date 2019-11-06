//creating objects -----------------------------------------------
var dog = {
    name: "Fido",
    breed: "Mixed",
    weight: 38
};
/* Just a simple dog object created
by an object literal. Now we
need to figure out how to
create a lot of these puppies.*/

function Dog(name, breed, weight){
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark =()=>{
        if(this.weight > 25){
            alert(`${this.name} says WOOF WOOF!`);
        }else{
            alert(`${this.name} says woof woof!`);
        }
    };
};

let fido = new Dog('Fido','Mixed',38);
let spiky = new Dog('Spiky','chuhwahwa',10);
let cuddles = new Dog('Cuddles','Australian poodle',15);
let hunter = new Dog('Hunter','Labrador',40);   //console.log(hunter)

let dogs = [fido, spiky, cuddles, hunter];
for(let i=0; i < dogs.length; i++){
    //dogs[i].bark();
    let size = 'small';
    if(dogs[i].weight > 10){
        size = 'large';
    }
    //console.log(`Dog: ${dogs[i].name} is a ${size} ${dogs[i].breed}`);
}


//FINISH EXERCISE ----------------=====================================-------------------

function Coffee(roast, ounces){
    this.roast = roast;
    this.ounces = ounces;
    this.getSize =()=>{
        if(this.ounces < 9){ return 'small'; }
        else if(this.ounces > 8 && this.ounces < 13){ return 'medium'; }
        else if(this.ounces > 12){ return 'large'; }
    };
    this.toString =()=>{
        return `You’ve ordered a ${this.getSize()} ${this.roast} coffee.`;
    };
}

let houseBlend = new Coffee('House blend', 8);
console.log( houseBlend.toString() );

let moonShine = new Coffee('Moon shine', 12);       //console.log(moonShine)
console.log( moonShine.toString() );

let darkRoast = new Coffee('Dark roast', 16);
console.log( darkRoast.toString() );
