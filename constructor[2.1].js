/****************** Animal constructor identifier ********************************************/
function Dog (dogProperty){
    this.name = dogProperty.name;
    this.breed = dogProperty.breed;
    this.weight = dogProperty.weight;
};
function Cat (catProperty){
    this.name = catProperty.name;
    this.breed = catProperty.breed;
    this.weight = catProperty.weight;
};
const isDog = (animalObj) =>{
    if(animalObj instanceof Dog){
        return true;
    }
    return false;
};

let fido = new Dog({name: 'Fido', breed: 'husky', weight: 40});     //console.log(fido)
let meow = new Cat({name: 'Meow', breed: 'siamese', weight: 21});
let billy = new Dog({name: 'Billy', breed: 'golden retriever', weight: 38});
let whiskers = new Cat({name: 'Whiskers', breed: 'mixed', weight: 20});

let pets = [fido, meow, billy, whiskers];
for(let i=0; i < pets.length; i++){
    if( isDog(pets[i]) ){
        console.log(`${pets[i].name} is a dog.`);
    }else{
        console.log(`${pets[i].name} is a cat.`);
    }
}

/*
using constructors still doesn’t prevent us from changing
an object into something else later, because after an object has been created by a
constructor, it can be altered.
*/
console.log(whiskers);      //before altering

whiskers.owner = 'Sarah';
whiskers.weight = 24;
delete whiskers.breed;
whiskers.trust = (who)=>{ return (who === whiskers.owner); };

console.log(whiskers);      //after altering


/* JavaScript comes with a set of constructors for instantiating some handy objects */
let dateObj = new Date();
let theDay = dateObj.getDay();
let theYear = dateObj.getFullYear();
let theTime = dateObj.getTime();

function getWeekDay(){
    let weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    for(let i=0; i < weekDays.length; i++){
        if( i == (parseInt(theDay) - 1) ){
            let day = weekDays[i];
            return day;
        }
    }
}
//console.log(dateObj);
//console.log(`Day: ${getWeekDay()}, Year: ${theYear}, Time: ${theTime}`);
    
let birthday = new Date('April 8, 2001 03:45 am');
//console.log(birthday);    

/*
We can also create array objects that have a specific size. 
Say we want an array with three items:
*/
let myArray1 = new Array();
myArray1[0] = 'Peter';
myArray1[1] = 'John';
myArray1[2] = 'Saul';

//console.log(myArray1);

let myArray2 = new Array(5);
myArray2[0] = 'Siri';
myArray2[1] = 'Alexa';
myArray2[2] = 'Brian';

//console.log(myArray2);

let myArray3 = [1, 2, 4, 5, 6,];
let aString = myArray3.join('-');   //console.log(aString);
let reversedArray = myArray3.reverse();    //console.log(reversedArray);
let areAllEven = myArray3.every( (x)=>{
    return ( (x % 2)== 0 );
} );
if(areAllEven){
    //console.log(`Yes, all are even`);
}else{
    //console.log(`No, not all is even`);
}

/*
The constructor comes in handy when you need to create an array of a
specific size you determine at runtime, and then add items to it
later, like this:

var n = getNumberOfWidgetsFromDatabase();
var widgets = new Array(n);
for(var i=0; i < n; i++) {
    widgets[i] = getDatabaseRecord(i);
}
*/