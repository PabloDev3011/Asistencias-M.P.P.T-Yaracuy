document.addEventListener("DOMContentLoaded", () => {
  const formularios = document.querySelectorAll("form");

  formularios.forEach((form) => {
    form.addEventListener("submit", (e) => {
      const campos = form.querySelectorAll("input, select, textarea");
      let validado = true;
      let primerCampoVacio = null;

      campos.forEach((campo) => {
        if (
          campo.id === "show_password" ||
          campo.name === "nota" ||
          campo.name === "observaciones_vaca"
        ) {
          return;
        }

        if (campo.value.trim() === "") {
          validado = false;

          if (!primerCampoVacio) primerCampoVacio = campo;
        }
      });

      if (!validado) {
        e.preventDefault();
        alert("Por favor, complete todos los campos obligatorios");
        if (primerCampoVacio) primerCampoVacio.focus();
      }
    });
  });
});
