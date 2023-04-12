/**
 * This is a workaround for the fact that p5.play requires the planck-js library to be loaded into the global namespace.
 */

import Planck from "./my-planck-js";

// Need to use Planck otherwise it won't be imported
Planck;

/** Import the p5.play library */
import "p5.play";
