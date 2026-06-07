document.addEventListener("DOMContentLoaded", function () {
  // calcular años
  function calcularDiferenciaAnos(fechaStr) {
    if (!fechaStr) return 0;
    const hoy = new Date();
    const fecha = new Date(fechaStr);
    let diff = hoy.getFullYear() - fecha.getFullYear();
    const mes = hoy.getMonth() - fecha.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) diff--;
    return diff;
  }

  // 1. VALIDACIÓN MAYORÍA DE EDAD
  const inputNacimiento = document.getElementById("f-nac");
  if (inputNacimiento) {
    inputNacimiento.addEventListener("blur", function () {
      if (this.value && calcularDiferenciaAnos(this.value) < 18) {
        alert("La persona debe ser mayor de edad.");
        this.value = "";
      }
    });
  }

  // 2. CÁLCULO DE AÑOS DE SERVICIO
  const camposIngreso = [
    {
      id: 'input[name="ingreso_mppt"]',
      res: 'input[name="tiempo_servicio_anos"]',
    },
    { id: 'input[name="fecha_mppt"]', res: 'input[name="anos_servicio"]' },
  ];

  camposIngreso.forEach((item) => {
    const inputIngreso = document.querySelector(item.id);
    const inputRes = document.querySelector(item.res);
    if (inputIngreso && inputRes) {
      inputIngreso.addEventListener("change", () => {
        inputRes.value = calcularDiferenciaAnos(inputIngreso.value);
      });
    }
  });

  // 3. CÁLCULO DÍAS DISFRUTE
  const formVacaciones = document.querySelector(".master-mppt-vaca form");
  if (formVacaciones) {
    const inicio = formVacaciones.querySelector(".pri-fecha");
    const fin = formVacaciones.querySelector(".sec-fecha");
    const campoDias = formVacaciones.querySelector(
      'input[name="dias_disfrute"]',
    );

    const calcularDias = () => {
      if (inicio.value && fin.value) {
        const dateI = new Date(inicio.value);
        const dateF = new Date(fin.value);

        if (dateF <= dateI) {
          alert("La fecha de culminación debe ser mayor a la de inicio.");
          fin.value = "";
          campoDias.value = "";
          return;
        }

        const diff = Math.floor((dateF - dateI) / (1000 * 60 * 60 * 24));
        campoDias.value = diff;
      }
    };

    inicio.addEventListener("change", calcularDias);
    fin.addEventListener("change", calcularDias);
  }

  //desde hasta
  const formPermisos = document.querySelector(".master-mppt form");
  if (formPermisos) {
    formPermisos.addEventListener("submit", (e) => {
      const d = new Date(formPermisos.querySelector(".pri-fecha").value);
      const h = new Date(formPermisos.querySelector(".sec-fecha").value);
      if (h <= d) {
        e.preventDefault();
        alert("Error: La fecha 'Hasta' debe ser posterior a 'Desde'.");
      }
    });
  }
});
