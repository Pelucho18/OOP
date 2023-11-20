const polygon = {
    nSides: 0,
    area: 0,
    perimeter: 0,
    size: 0,
    CalcularArea: function () {
        this.area = (this.nSides * (this.size ** 2)) /
            (4 * Math.tan(Math.PI / this.nSides));
    },
    CalcularPeri: function () {
        this.perimeter = this.nSides * this.size;
    },
};
polygon.color = "verde";
polygon.nSides = 4;
polygon.size = 2;
if (polygon.nSides < 3 || polygon.size == 0) {
    console.log("No es posible completar la operación");
}
else {
    polygon.CalcularPeri();
    polygon.CalcularArea();
    console.debug(`El perimetro del poligono con ${polygon.nSides} lados es: ${polygon.perimeter}`);
    console.debug(`El Area del poligono con ${polygon.nSides} lados es: ${polygon.area}`);
    console.log(`El color del poligono es: ${polygon.color}`);
}

