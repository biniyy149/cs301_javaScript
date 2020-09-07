let car={
    make: "Toyata",
    model: "Camry",
    year: 2015,
    odometer: 80000,
    serviceCount: 5,
    service: function(){return this.serviceCount++;},
    getOdometerReading: function(){return this.odometer;},
    reset: function(){this.odometer = 0; this.serviceCount = 0;}
    };
console.log(car.getOdometerReading());
console.log(car.reset());
console.log(car.serviceCount);
