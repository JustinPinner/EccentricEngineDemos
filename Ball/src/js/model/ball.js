import { GameObject, Point2D } from 'eccentric-engine/Engine';

class Ball extends GameObject {
  constructor(conf, position, engine) {
    super(conf, position, engine);
  }
  get isBall() {
    return true;
  }
}

Ball.prototype.checkBounce = function() {
  const canvas = this.engine.canvas('viewport');
  const testPos = new Point2D(
    this.coordinates.x + this.velocity.x, 
    this.coordinates.y + this.velocity.y
  );
  const minPos = new Point2D(
    canvas.coordinates.x + (this.width / 2), 
    canvas.coordinates.y + (this.height / 2)
  );
  const maxPos = new Point2D(
    (canvas.coordinates.x + canvas.width) - (this.width / 2),
    (canvas.coordinates.y + canvas.height) - (this.height / 2)
  );
  const bounced = {x: false, y: false};

  if (testPos.x < minPos.x || testPos.x > maxPos.x) {
    // side edge collision
    bounced.x = true;
  }
  if (testPos.y < minPos.y || testPos.y > maxPos.y) {
    // top/bottom edge collision
    bounced.y = true;
  }
  if (bounced.x || bounced.y) {
    if (bounced.x) {
      this.velocity.x *= -1;
    }
    if (bounced.y) {
      this.velocity.y *= -1;
    }
    this.engine.audioSystem.playEffect(this.soundEffects.bounce);
  }

  this.coordinates.x += this.velocity.x;
  this.coordinates.y += this.velocity.y;

}

Ball.prototype.draw = function() {
  // get drawing context
  const drawLineWidth = 3;
  const canvas = this.engine.canvas('viewport');
  if (!canvas.context) {
    return;
  }
  
  // capture the canvas context's default lineWidth
  const defaultLineWidth = canvas.context.lineWidth;
  // and change it to our desired width (if different)
  if (defaultLineWidth != drawLineWidth) {
    canvas.context.lineWidth = drawLineWidth;
  }

  // draw a circle with radius 1/2 ball's width
	canvas.context.beginPath();
	canvas.context.strokeStyle = "white";
	canvas.context.arc(this.coordinates.x, this.coordinates.y, this.width/2 , 0, Math.PI * 2, false);
  canvas.context.stroke();

  // restore the original line width (if we changed it)
  if (canvas.context.lineWidth != defaultLineWidth) {
    canvas.context.lineWidth = defaultLineWidth;
  }
}

export {
  Ball
};