import { FOX_STATE } from "./gameConstants";

export const game = {
  foxState: FOX_STATE.INIT,
  clock: 0,

  handleAction(actionIcon) {
    if (this.foxState === FOX_STATE.INIT) {
      console.log("Fox hatching");

      this.foxState = FOX_STATE.HATCHING;
      game.renderFoxState();

      return;
    }

    console.log(`Action ${actionIcon} clicked`);
  },

  renderFoxState() {
    const foxSprite = document.querySelector(".c-fox-sprite");
    foxSprite.className = `c-fox-sprite c-fox-${this.foxState}`;

    this.clock++;
  },

  tick() {
    this.clock++;

    console.log("tick no.", this.clock);

    return this.clock;
  },
};

export const handleAction = game.handleAction.bind(game);
