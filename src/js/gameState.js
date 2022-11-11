export const gameState = {
  current: "INIT",
  clock: 0,

  tick() {
    this.clock++;

    console.log("tick no.", this.clock);

    return this.clock;
  },

  handleAction(actionIcon) {
    console.log(`Action ${actionIcon} clicked`);
  },
};
