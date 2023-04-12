/**
 * Demo implmenetation for p5.play in Typescript.
 * This includes typehinting in JetBrains IDE
 */

import P5 from "./libs/my-p5-enable-addons";
// import "p5/lib/addons/p5.sound";	// Include if needed
import "./libs/my-p5.play";

import "./styles.scss";

// Creating the sketch itself
const sketch = (p5: P5) => {
  // @ts-ignore
  let sprite: P5.Sprite;

  // The sketch setup method
  p5.setup = () => {
    // Creating and positioning the canvas
    const canvas = p5.createCanvas(600, 500);
    canvas.parent("app");

    sprite = new p5.Sprite();
    sprite.width = 300;
    sprite.height = 50;
    sprite.addSpeed(1, 275);
  };

  // The sketch draw method
  p5.draw = () => {
    // Erase the background
    p5.background(255);
  };
};

new P5(sketch);
