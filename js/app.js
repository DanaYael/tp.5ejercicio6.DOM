document.addEventListener("DOMContentLoaded", function () {
  let timer = null;
  let timeLeft = 0;
  let isRunning = false;

  const timeInput = document.getElementById("timeInput");
  const cronometro = document.getElementById("cronometro");
  const iniciarBtn = document.getElementById("iniciarbtn");
  const pausarBtn = document.getElementById("pausarbtn");
  const reiniciarBtn = document.getElementById("reiniciarbtn");

  // Función para actualizar el cronómetro
  function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    cronometro.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }

  // Función para iniciar el cronómetro
  function startTimer() {
    if (isRunning || timeLeft <= 0) return;

    isRunning = true;
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateTimer();
      } else {
        clearInterval(timer);
        isRunning = false;
        alert("El tiempo ha terminado");
      }
    }, 1000);
  }

  // Función para pausar el cronómetro
  function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
  }

  // Función para reiniciar el cronómetro
  function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 0;
    updateTimer();
  }

  // Event listeners
  iniciarBtn.addEventListener("click", () => {
    const inputTime = parseInt(timeInput.value);
    if (!isNaN(inputTime) && inputTime > 0) {
      timeLeft = inputTime;
      updateTimer();
      startTimer();
    } else {
      alert("Por favor, ingresa un tiempo válido.");
    }
  });

  pausarBtn.addEventListener("click", pauseTimer);
  reiniciarBtn.addEventListener("click", resetTimer);
});
