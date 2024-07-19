// ++++++++++++Immediately Invoked Function Expression (IIFE)

(function Chai() {
    // named IIFE 
    console.log(`DB connected`);
})();
( (name) => {
    console.log(`DB CONNEDECTED TOW ${name}`);
}) ("Raj")