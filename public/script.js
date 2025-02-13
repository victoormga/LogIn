document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  let gradientStep = 0;

  function changeGradient() {
      gradientStep += 0.5; // Ajusta la velocidad del cambio
      const color1 = `hsl(230, 40%, ${(10 + (Math.sin(gradientStep / 100) * 10))}%)`;
      const color2 = `hsl(240, 50%, ${(20 + (Math.cos(gradientStep / 100) * 10))}%)`;
      body.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;
      
      requestAnimationFrame(changeGradient);
  }

  changeGradient();
});
