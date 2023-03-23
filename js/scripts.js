$(document).ready(function(){
  // Fuccion de Hamburguesa
    $('#menu_on').click(function(){ // Al hacer click...
        $('body').toggleClass('visible_menu'); // Añadimos o eliminamos la clase 'visible_menu' al body
      return false;
      })
  // Productos 
  function filterProducts() {
    // Obtener el término de búsqueda
    var searchTerm = document.getElementById('search').value.toLowerCase();
  
    // Obtener todos los productos
    var products = document.getElementsByClassName('product');

    // Recorrer los productos y ocultar o mostrar según el término de búsqueda
    for (var i = 0; i < products.length; i++) {
      var name = products[i].getAttribute('data-name').toLowerCase();
      var description = products[i].getAttribute('data-description').toLowerCase();
  
      if (name.indexOf(searchTerm) >= 0 || description.indexOf(searchTerm) >= 0) {
        products[i].style.display = '';
      } else {
        products[i].style.display = 'none';
      }
    }
  }
  
  // Asociar la función de filtrado al evento 'submit' del formulario
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    filterProducts();
  });
});
