const auto = {
    marca: 'Mazda',
    mostrarMarca: function() {
        return `La marca del auto es ${this.marca}.`;
    }
};

const moto = {
    marca: 'BMW'
};

const marcaMoto = auto.mostrarMarca.call(moto);

console.log(marcaMoto); 
