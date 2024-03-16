const Car = function(make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function() {
  this.speed += 10;
  console.log(`${this.make} is moving at ${this.speed} km/h`);
}
Car.prototype.brake = function() {
  this.speed -= 5;
  console.log(`${this.make} is moving at ${this.speed} km/h`);
}
const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

// Let's check
bmw.accelerate();
bmw.brake();
bmw.accelerate();

mercedes.acclerate();
mercedes.acclerate();
mercedes.acclerate();
mercedes.speed();
