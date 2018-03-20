class MovingObject {
  constructor (pos, vel, radius, color) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
  }

  draw (ctx) {
    const canvas = document.getElementById('game-canvas');
    const c = canvas.getContext('2d');
    c.fillStyle = "blue";
    c.beginPath();
    c.arc(100, 100, 75, 0, 0, 2 * Math.PI);
  }
}



module.exports = MovingObject;
