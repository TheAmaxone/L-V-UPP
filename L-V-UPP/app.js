function toggleSettings() {
  const overlay = document.getElementById("settingsOverlay");
  overlay.style.display = overlay.style.display === "flex" ? "none" : "flex";
}

function applySettings() {
  const username = document.getElementById("usernameInput").value;
  const themeColor = document.getElementById("themeColor").value;
  const autoTheme = document.getElementById("autoTheme").checked;

  if (username) document.getElementById("username").textContent = username;

  if (autoTheme) {
    const banner = document.getElementById("bannerImage");
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = banner.src;
    img.onload = function () {
      ctx.drawImage(img, 0, 0, 1, 1);
      const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
      document.body.style.background = `rgb(${r},${g},${b})`;
    };
  } else {
    document.body.style.background = themeColor;
  }

  toggleSettings();
}

function openCropTab(type) {
  window.open(`crop.html?type=${type}`, "_blank", "width=800,height=600");
}

window.addEventListener("message", (e) => {
  if (e.data.type === "setImage") {
    const imgData = e.data.data;
    if (location.href.includes("index.html")) {
      document.getElementById("profilePic").style.backgroundImage = `url(${imgData})`;
    }
  }
});