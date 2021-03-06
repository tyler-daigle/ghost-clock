export function scrollItem(
  parentContainer: HTMLElement,
  scrollingContent: HTMLElement,
  scrollSpeed: number = 2
) {
  // get the width of the screen
  // get the width of the content to scroll
  // set the left margin of the content to the width of the screen
  // keep subtracting the left margin until it === -width of the content
  // once we reach the end of the content reset it back to the width of the screen
  // scrollSpeed will be number of pixels per tick to scroll
  // const screenWidth = document.getElementsByTagName("body")[0].clientWidth;
  const screenWidth = parentContainer.offsetWidth;
  const contentWidth = scrollingContent.offsetWidth;

  const delay = 10;

  scrollingContent.style.marginLeft = `${screenWidth}px`;

  setInterval(() => {
    let currentPosition = parseInt(scrollingContent.style.marginLeft);
    // multiply the contentWidth by 3 so that the entire piece of content scrolls
    // off the screen - otherwise it just disappears.
    if (currentPosition < -(contentWidth * 2) - screenWidth) {
      currentPosition = screenWidth + contentWidth;
    } else {
      currentPosition -= scrollSpeed;
    }

    scrollingContent.style.marginLeft = `${currentPosition}px`;
  }, delay);
}
