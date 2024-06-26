const rectangulo = {
    ancho: 0,
    alto: 0,
    area: function() {
        return this.ancho * this.alto;
    }
};

const cuadrado = {
    lado: 6
};

const areaCuadrado = rectangulo.area.call({ ancho: cuadrado.lado, alto: cuadrado.lado });

console.log(areaCuadrado); 
