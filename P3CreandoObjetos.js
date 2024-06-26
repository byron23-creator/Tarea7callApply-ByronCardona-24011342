const persona1 = {
    nombre: 'Josue'
};

const persona2 = {
    nombre: 'Yohana'
};

function saludar() {
    return `Hola, mi nombre es ${this.nombre}!`;
}

const saludo = saludar.call(persona2);

console.log(saludo); 
