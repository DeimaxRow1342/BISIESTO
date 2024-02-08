// ----OBTENER EL VALOR DE LA DIFICULTAD---------
document.getElementById('botonJugar').addEventListener('click', function () {
    const nivelDificultadSeleccionado = document.getElementById('nivelDificultad').value;

    localStorage.setItem('nivelDificultad', nivelDificultadSeleccionado);
});

// ----VER SI EL USUARIO PRESIONÓ ALGUNA CATEGORIA PARA MOSTRAR EL BOTON---------
const nivelDificultadSelect = document.getElementById('nivelDificultad');
const botonJugar = document.getElementById('botonJugar');

nivelDificultadSelect.addEventListener('change', actualizarVisibilidadBoton);

function actualizarVisibilidadBoton() {
    if (nivelDificultadSelect.value !== '') {
        botonJugar.style.display = 'block';
    } else {
        botonJugar.style.display = 'none';
    }
}
