import { EventSystem } from "201flaviosilva-utils";

/**
 * @class Particles
 * @classdesc Create particles in the DOM
 * 
 * @example console.log("Particles");
 * 
 * @memberof DOM
 */
export class Particles {
	constructor(config) {
		this.position = {
			x: config.x || 0,
			y: config.y || 0,
		};

		this.lifetime = config.lifetime || 1000;


	}
}

/**
 * @memberof DOM
 */
export const ParticlesInstance = new Particles();
