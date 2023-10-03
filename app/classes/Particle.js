export default class Particle {
  constructor(effect) {
    this.effect = effect;
    this.radius = Math.random() * 2 + 2;
    this.x =
      this.radius + Math.random() * (this.effect.width - this.radius * 2);
    this.y =
      this.radius + Math.random() * (this.effect.height - this.radius * 2);
    this.vx = Math.random() * 4 - 2;
    this.hy = Math.random() * 4 - 2;
  }

  draw(context) {
    // context.fillStyle = "hsl(degree,saturation,lightness)";
    // context.fillStyle = `hsl(${this.x * 0.5},100%,50%)`;
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fill();
    // context.stroke();
  }

  update() {
    if (this.x > this.effect.width || this.x < 0) {
      this.vx = this.vx *= -1;
    }
    if (this.y > this.effect.height || this.y < 0) {
      this.hy = this.hy *= -1;
    }
    this.x += this.vx;
    this.y += this.hy;
  }
}
