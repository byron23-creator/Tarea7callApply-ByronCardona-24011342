function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

const persona = {
    nombre: 'Fernando'
};

const saludo = saludar.call(persona, persona.nombre);

console.log(saludo); 
