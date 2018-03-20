Function.prototype.inherits = function(SuperClass) {
  function Surrogate() {}
  Surrogate.prototype = SuperClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

Function.prototype.inherits1 = function(SuperClass) {
  this.prototype = Object.create(SuperClass.prototype);
  this.prototype.constructor = this;
};

class MovingObject {
  constructor(type) {
    this.type = type;
  }

  collide() {
    console.log("I collided!");
  }

  move() {
    console.log("I am moving!");
  }
}

class Ship extends MovingObject{
  constructor(type, captain) {
    super(type);
    this.captain = captain;
  }

  speed() {
    console.log("Light speed");
  }
}

Ship.inherits(MovingObject);

class Asteroid extends MovingObject {
  constructor(type, aliens) {
    super(type);
    this.aliens = aliens;
  }

  numberOfCraters() {
    console.log("Too many to count");
  }
}
Asteroid.inherits(MovingObject);
