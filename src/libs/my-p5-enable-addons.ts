/**
 * This file is required to use p5 addons (sound, p5.play, etc)
 * It must be imported before any other p5 addon
 * Because this file creates the p5 global, it must be imported before any other p5 addons
 */

/** Import the P5 library */
import P5 from "p5";

/** Create the p5 global. This is required for all addons (sound, p5.play, etc) */
// @ts-ignore
window.p5 = P5;

export default P5;
