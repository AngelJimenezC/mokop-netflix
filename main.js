const fila = document.querySelector('.container-carrusel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaizquierda = document.getElementById('flecha-izquierda');
const flechaderecha = document.getElementById('flecha-derecha');

flechaderecha.addEventListener('click', () => {
   fila.scrollLeft += fila.ofsetwidth;
});

flechaizquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.ofsetwidth;
 });

