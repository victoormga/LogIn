document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  let gradientStep = 0;

  function changeGradient() {
      gradientStep += 0.5;
      const color1 = `hsl(230, 40%, ${(10 + (Math.sin(gradientStep / 100) * 10))}%)`;
      const color2 = `hsl(240, 50%, ${(20 + (Math.cos(gradientStep / 100) * 10))}%)`;
      body.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;
      
      requestAnimationFrame(changeGradient);
  }

  changeGradient();
});

document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita el recargo de página

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          window.location.href = "/dashboard.html"; // Redirige si es correcto
      } else {
          document.getElementById("errorMsg").innerText = data.message;
      }
  });
});
