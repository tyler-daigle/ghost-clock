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

  scrollingContent.style.marginLeft = `${screenWidth / 2}px`;

  setInterval(() => {
    let currentPosition = parseInt(scrollingContent.style.marginLeft);
    if (currentPosition < -(contentWidth * 2)) {
      currentPosition = screenWidth;
    } else {
      currentPosition -= scrollSpeed;
    }

    scrollingContent.style.marginLeft = `${currentPosition}px`;
  }, delay);
}
