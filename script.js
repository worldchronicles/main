// === FADE IN BODY ON LOAD ===
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// === BUTTON PRESS ANIMATIONS ===
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mousedown", () => {
    btn.style.transform = "scale(0.95)";
  });
  btn.addEventListener("mouseup", () => {
    btn.style.transform = "scale(1.05)";
    setTimeout(() => { btn.style.transform = "scale(1)"; }, 150);
  });
});

// === COPY SERVER IP TO CLIPBOARD ===
const ipBox = document.querySelector(".ip-box");
if (ipBox) {
  ipBox.style.cursor = "pointer";
  ipBox.title = "Click to copy server IP!";
  ipBox.addEventListener("click", () => {
    const ip = "147.185.221.31:52978";
    navigator.clipboard.writeText(ip).then(() => {
      ipBox.innerHTML = "✅ IP Copied: " + ip;
      setTimeout(() => {
        ipBox.innerHTML =
          "Server IP: <strong>" + ip + "</strong><br>Version: 1.21.8 (Java Edition)";
      }, 2000);
    });
  });
}

// === BACKGROUND SPARKLE PARTICLES ===
const canvas = document.createElement("canvas");
canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.pointerEvents = "none";
canvas.style.zIndex = "0";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

let particles = [];
function createParticles() {
  for (let i = 0; i < 3; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 3 + 2,
      life: Math.random() * 80 + 40
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "rgba(255,255,255,0.8)";
  particles.forEach((p, i) => {
    ctx.fillRect(p.x, p.y, p.size, p.size);
    p.y -= 0.3;
    p.life--;
    if (p.life <= 0) particles.splice(i, 1);
  });
  if (Math.random() < 0.3) createParticles();
  requestAnimationFrame(animate);
}
animate();
