window.onload = function() {
      const textoGuardado = localStorage.getItem("textoUsuario");
      if (textoGuardado) {
        document.getElementById("texto").value = textoGuardado;
      }
    };

    function guardarTexto() {
      const texto = document.getElementById("texto").value;
      localStorage.setItem("textoUsuario", texto);
      alert("Texto guardado en localStorage.");
    }

    function leerTexto() {
      const texto = document.getElementById("texto").value;
      const utterance = new SpeechSynthesisUtterance(texto);
      utterance.lang = 'es-ES';
      speechSynthesis.speak(utterance);
    }