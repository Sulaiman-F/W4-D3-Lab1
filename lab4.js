let saudiaAirlines ={
    airlineName : "Saudia Airlines",
    country :"Saudi Arabia",
    fleetSize : 8,
    destinations :["Riyadh", "Jeddah", "Dubai", "New York"],
    inOperation : true,
    bookFlight :function (des){
        if (this.destinations.includes(des)) {
            console.log(`Flight booked to ${des}.`);
        } else {
            console.log(`Sorry, no flights to ${des} at the moment.`);
        }
    },
    addDestination:function(des) {
        if (this.destinations.includes(des)) {
            console.log(`The flight is there ${des}.`);
        } else {
            console.log(`the flights to ${des} added`);
            this.destinations.push(des)
        }
    },
    getSummary:function() {
        console.log(`${this.airlineName } operates in ${this.country} with a fleet of ${this.fleetSize} airtcraft and flies to ${this.destinations.length} destinations`);
    },
    add:function(num1,num2){
        return num1+num2
    },
    sub:function(num1,num2){
        return num1-num2
    },
    mult:function(num1,num2){
        return num1*num2
    },
    div:function(num1,num2){
        return num1/num2
    },


}

saudiaAirlines.bookFlight("Dubai");

saudiaAirlines.addDestination("London");

saudiaAirlines.getSummary();