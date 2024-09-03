class Car {
    #engineStatus = false;
  
    startEngine() {
      this.#engineStatus = true;
      console.log('Your Engine started');
    }
  
    stopEngine() {
      this.#engineStatus = false;
      console.log('Your Engine stopped');
    }
  }
  
  const myCar = new Car();
//   myCar.startEngine(); // Engine started
  myCar.stopEngine(); // Engine stoped
  