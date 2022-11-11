import { ACTION_ICONS } from "../gameConstants";

const toggleHighligthed = (iconIndex, isHighlighted) => {
  document
    .querySelector(`.c-${ACTION_ICONS[iconIndex]}-icon`)
    .classList.toggle("highlighted", isHighlighted);
};

export function inititButtons(handleAction) {
  let highlightedIconIndex = 0;

  function handleClickButton({ target }) {
    if (target.classList.contains("c-btn-left")) {
      toggleHighligthed(highlightedIconIndex, false);

      highlightedIconIndex =
        (highlightedIconIndex + ACTION_ICONS.length - 1) % ACTION_ICONS.length;
      toggleHighligthed(highlightedIconIndex, true);
    } else if (target.classList.contains("c-btn-right")) {
      toggleHighligthed(highlightedIconIndex, false);

      highlightedIconIndex = (highlightedIconIndex + 1) % ACTION_ICONS.length;
      toggleHighligthed(highlightedIconIndex, true);
    } else {
      handleAction(ACTION_ICONS[highlightedIconIndex]);
    }
  }

  const commandButtons = document.querySelectorAll(".c-btn");

  for (let button of commandButtons) {
    button.addEventListener("click", handleClickButton);
  }
}
