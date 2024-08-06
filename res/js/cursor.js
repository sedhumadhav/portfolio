const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

function updateCursorPosition(x, y) {
  cursorDot.style.top = y + "px";
  cursorDot.style.left = x + "px";

  cursorOutline.animate(
    {
      top: y + "px",
      left: x + "px",
    },
    {
      duration: 500,
      fill: "forwards",
    }
  );
}

// Handle mouse movement
window.addEventListener("mousemove", (e) => {
  const posX = e.clientX;
  const posY = e.clientY;
  updateCursorPosition(posX, posY);
});

// Handle touch movement
window.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  const posX = touch.clientX;
  const posY = touch.clientY;
  updateCursorPosition(posX, posY);
});

// Handle touch start for dragging
window.addEventListener("touchstart", (e) => {
  const touch = e.touches[0];
  const posX = touch.clientX;
  const posY = touch.clientY;
  updateCursorPosition(posX, posY);
});
