import React from "react";
import Sketch from "react-p5";

class Moonlight extends React.Component {
  t = 0;

  setup = (p5, canvasParentRef) => {
    let height = document.getElementById("home-container").offsetHeight;
    p5.createCanvas(p5.windowWidth, height).parent(canvasParentRef);
    p5.background(56, 68, 76);
  };

  draw = (p5) => {
    let height = document.getElementById("home-container").offsetHeight;
    p5.translate(p5.windowWidth / 2, height / 2);
    const w = p5.min(p5.windowWidth, height);
    const n = p5.noise;

    let a = 0.45 * w;
    let b = n(this.t) * 6;
    let c = n(this.t++ + 60) * 6;

    p5.noFill();
    p5.stroke(255, 10);
    p5.line(p5.cos(b) * a, p5.sin(b) * a, p5.cos(c) * a, p5.sin(c) * a);
  };

  mouseClicked = (p5) => {
    p5.noiseSeed(p5.random());
    p5.background(56, 68, 76);
    this.t = 0;
    p5.draw();
  };

  windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    p5.noiseSeed(p5.random());
    p5.background(56, 68, 76);
    this.t = 0;
    p5.draw();
  };

  render() {
    return (
      <Sketch
        setup={this.setup}
        draw={this.draw}
        mouseClicked={this.mouseClicked}
        windowResized={this.windowResized}
      />
    );
  }
}

export default Moonlight;
