import * as Device from "./Device/index.js";

import { KeyboardManager, KeyboardManagerInstance, KEYS } from "./KeyboardManager.js";
import { MouseButton, MouseManager, MouseManagerInstance } from "./MouseManager.js";
import { Particles, ParticlesInstance } from "./Particles.js";

import { deleteAllChildDom } from "./deleteAllChildDom.js";
import { exportFile } from "./exportFile.js";
import { getUrlParameter } from "./getUrlParameter.js";
import { notification } from "./notification.js";
import { printObjectInDOM } from "./printObjectInDOM.js";
import { toggleFullScreen } from "./toggleFullScreen.js";

/**
 * Utils for DOM
 * @namespace DOM
 */
export {
	Device,

	KeyboardManager, KeyboardManagerInstance, KEYS,
	MouseManager, MouseManagerInstance, MouseButton,
	Particles, ParticlesInstance,

	deleteAllChildDom,
	exportFile,
	getUrlParameter,
	notification,
	printObjectInDOM,
	toggleFullScreen,
};
