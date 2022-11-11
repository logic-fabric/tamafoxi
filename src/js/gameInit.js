import { gameState } from "./gameState";

import { TICK_RATE } from "./gameConstants";

export async function init() {
  console.log("Initializing game");

  let nextTimeToTick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      gameState.tick();
      nextTimeToTick = now + TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFrame);
  }

  nextAnimationFrame();
}
