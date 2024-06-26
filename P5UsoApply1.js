let persona1 = {
    nombre: 'Juan'
  };
  
  let persona2 = {
    nombre: 'Olivia'
  };
  
  function presentar() {
    return `Hola, soy ${this.nombre}.`;
  }
  
  let mensajePersona2 = presentar.apply(persona2);
  
  console.log(mensajePersona2); 