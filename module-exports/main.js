//Chamando recurso
let plugin = require('./plugin')
let moment = require('moment')

console.log(plugin.imc(60, 1.6).toFixed(2));
console.log(plugin.quadrado(9));

console.log(moment().format());
console.log(moment().endOf('day').fromNow());