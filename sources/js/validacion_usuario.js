let user = "admin";
let password = "1234";

function validar_usr(obj) {
  let usr = obj.usuario.value;
  let pass = obj.clave.value;

  if (usr != user) {
    Swal.fire({
      icon: "error",
      title: "Usuario incorrecto",
    });
    obj.usuario.focus();
    return false;
  }
  if (pass != password) {
    Swal.fire({
      icon: "error",
      title: "Clave incorrecta",
    });
    obj.clave.focus();
    return false;
  }
}
