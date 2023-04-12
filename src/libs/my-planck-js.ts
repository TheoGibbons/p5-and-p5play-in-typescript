/**
 * This file is required to load the planck-js library into the global namespace.
 */

/** Import the planck-js library (required by p5.play) */
import Planck from "planck-js";

/** Create the planck global. This is required for p5.play to load correctly */
window.planck = Planck;

export default Planck;
