let car={
    make: "Toyata",
    model: "Camry",
    year: 2015,
    odometer: 80000,
    serviceCount: 5,
    service: function(){return this.service++;},
    getOdometerReading: function(){return this.odometer;},
    reset: function(){this.odometer = 0; this.service = 0;}
    };