const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const bolinhas = [];
const numBolinhas = 50;

for (let i = 0; i < numBolinhas; i++) {
  bolinhas.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: Math.random() * 2 - 1,
    vy: Math.random() * 2 - 1,
    radius: Math.random() * 5 + 2,
  });
}
function drawBolinha(x, y, radius) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.69)';
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.stroke();
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < bolinhas.length; i++) {
    const bolinha = bolinhas[i];
    bolinha.x += bolinha.vx;
    bolinha.y += bolinha.vy;

    if (bolinha.x < 0 || bolinha.x > canvas.width) {
      bolinha.vx *= -1;
    }
    if (bolinha.y < 0 || bolinha.y > canvas.height) {
      bolinha.vy *= -1;
    }

    drawBolinha(bolinha.x, bolinha.y, bolinha.radius);

    for (let j = i + 1; j < bolinhas.length; j++) {
      const otherBolinha = bolinhas[j];
      const distance = Math.sqrt((bolinha.x - otherBolinha.x) ** 2 + (bolinha.y - otherBolinha.y) ** 2);
      if (distance < 150) {
        drawLine(bolinha.x, bolinha.y, otherBolinha.x, otherBolinha.y);
      }
    }
  }

  requestAnimationFrame(update);
}
update();

