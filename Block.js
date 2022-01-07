class Block {
  constructor(x, y, width, height) {
    var options = {
      restitution: 0.4,
      friction: 0.0,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("block.png")
    this.Visiblity = 255;
    World.add(world, this.body);

    this.active = true;
  }

  display() {
    if (this.body.speed < 3 && this.active) {
      var pos = this.body.position;
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
    } else {
      this.active = false;
      World.remove(world, this.body);
    }

    if (this.active == false) {
      this.Visiblity = this.Visiblity - 5;
      imageMode(CENTER);
      push()
      tint(255, this.Visiblity);
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      pop()
    }
  }
}