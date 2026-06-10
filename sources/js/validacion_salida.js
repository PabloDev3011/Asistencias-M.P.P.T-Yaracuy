document.addEventListener("DOMContentLoaded", () => {
  const enlace = document.getElementById("salida");

  if (enlace) {
    enlace.addEventListener("click", function (event) {
      event.preventDefault();
      const destino = this.getAttribute("href");

      Swal.fire({
        title: "¿Estás seguro?",
        text: "Vas a abandonar esta página.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, salir",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = destino;
        }
      });
    });
  }
});
