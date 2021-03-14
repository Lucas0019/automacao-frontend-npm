imc = (peso, altura) => {
    let imc = peso / (altura * altura);
    return imc;
}

quadrado = (number) => {
    let numberResult = number * number;
    return  numberResult;
}

// console.log(imc(72, 1.7).toFixed(2));

//Exportando recurso
module.exports.imc = imc;
module.exports.quadrado = quadrado;