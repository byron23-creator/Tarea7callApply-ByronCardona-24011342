let libro = {
    titulo: 'Crimen y Castigo',
    autor: 'Raskólnikov'
  };
  
  function agregarCapitulos(capitulos) {
    this.capitulos = capitulos;
  }
  
  let arrayCapitulos = [
    'Capítulo 1: Inicio en San Petersburgo',
    'Capítulo 2: Evitando Contacto Social'
  ];
  
  agregarCapitulos.apply(libro, [arrayCapitulos]);
  
  console.log(libro);
  