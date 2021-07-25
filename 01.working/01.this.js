///////////////////////////////////////
// THIS 

var om = {
    name: 'Om',
    yob: 1996,
    calcAge: function() {
        // will print the om object to the console 
        console.log(this);
        console.log(2021 - this.yob);
        
        function innerFun() {
            // will print the windows object to the console 
            console.log(this);
        }
        innerFun();
    }
};

/**
 * Normal functions: THIS points to the window object
 * Object Methods: THIS points to the current object
 */
om.calcAge();

var hari = {
    name: 'Hari',
    yob: 1992
}

hari.calcAge = om.calcAge;
hari.calcAge();