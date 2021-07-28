class Blower {
    constructor(x, y, w, h) {
      let options = {
        isStatic: true
      }
  
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.x = x
      this.y = y
      this.width = w
      this.height = h

      World.add(world, this.body)
    }
  
    show() {
      var pos = this.body.position
      

      push();
      translate(pos.x, pos.y)
      rectMode(CENTER)
      fill("red")
      rect(0, 0, this.width, this.height)
      pop();
    }
  }
