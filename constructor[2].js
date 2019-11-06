/*   
function Car(make, model, year, color, passengers, convertible, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.passengers = passengers;
    this.convertible = convertible;
    this.mileage = mileage;
    this.started = false;
    this.start = function() {
        this.started = true;
    };
    //rest of the methods here
}    

Notice we're using a lot of parameters here. We count seven.
And when we write code that calls this constructor we have 
to make sure we get the arguments all in exactly the right order.
*/

function Car(params) {
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertible = params.convertible;
    this.mileage = params.mileage;
    this.started = false;
    this.start = function() {
        this.started = true;
    };
    this.stop = function() {
        this.started = false;
    };
    this.drive = function() {
        if (this.started) {
            alert("Zoom zoom!");
        } else {
            alert("You need to start the engine first.");
        }
    };
}

let cadi = new Car({
    model: "Cadillac",
    year: 1955,
    make: "GM",
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
});     

/**************** OR **********************
let cadiParams = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
}; 
let cadi = new Car(cadiParams);
******************************************/

//console.log(cadi);
//cadi.start();
//cadi.drive();