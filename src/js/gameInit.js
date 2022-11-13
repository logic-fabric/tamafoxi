import { initButtons } from "./components/buttons";
import { displayMessageInDialog } from "./components/dialogs";

import { game, handleAction } from "./gameState";

import { TICK_RATE } from "./gameConstants";

export async function init() {
  console.log("Initializing game");

  initButtons(handleAction);
  displayMessageInDialog("Press the middle button to start the game");

  let nextTimeToTick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      game.tick();

      nextTimeToTick = now + TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFrame);
  }

  nextAnimationFrame();
}
