var axios = require('axios');
module.exports = {
 chamarDolar:async () => {
const valoresDol = [];
const dolarPre = await axios.get('https://economia.awesomeapi.com.br/all/USD-BRL');
var valorDolar = dolarPre.data.USD.high;
valoresDol.push(valorDolar);
return valoresDol;

 }
}