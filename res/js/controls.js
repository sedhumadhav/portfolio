// VIDEO MUTE
const video = document.getElementById("video");
const muteButton = document.getElementById("mute-toggle");

document.addEventListener("DOMContentLoaded", () => {
  let isMuted = true;
  muteButton.addEventListener("click", () => {
    // Toggle mute state
    isMuted = !isMuted;
    video.muted = isMuted;

    // Update button text
    muteButton.textContent = isMuted ? "Unmute" : "Mute";
  });
});

// DARK MODE
// get the dark mode toggle
let toggle = document.querySelector(".toggle-checkbox");
// get localStorage item
let darkPref = localStorage.getItem("dark-mode");

if (darkPref === "true") {
  enableDarkMode();
}
if (toggle) {
  toggle.addEventListener("click", function () {
    if (toggle.checked) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
}

function enableDarkMode() {
  console.log("[CONTROL] : Dark mode enabled");
  document.body.classList.add("dark");
  localStorage.setItem("dark-mode", true);
  toggle.checked = true;
}

function disableDarkMode() {
  console.log("[CONTROL] : Dark mode disabled");
  document.body.classList.remove("dark");
  localStorage.setItem("dark-mode", false);
  toggle.checked = false;
}
