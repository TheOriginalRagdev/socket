import { Entity } from "./entity";

export class Player extends Entity {
  constructor(data) {
    super();
    this.name = data.name;
    this.mainUnit = data.player;
    this.clientId = undefined; // socketId

    //console.log("global", global.ControlComponent);
    if (box.isServer) {
      // add other player controls
    } else {
      this.addComponent("ControlComponent");
    }
  }
  setMainUnit(unit) {
    this.mainUnit = unit;
  }

  getMainUnit() {
    return this.mainUnit;
  }

  tick() {
    super.tick(); // call Entity.tick()
    console.log("this isn't running")
  }
}
