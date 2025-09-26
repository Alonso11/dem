function runStep(step) {
  const output = document.getElementById("pipeline-output");
  output.innerHTML += `➡️ ${step} completado<br>`;
  output.scrollTop = output.scrollHeight;
}

