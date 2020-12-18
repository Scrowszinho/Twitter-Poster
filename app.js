// var dolar = require('./src/dolar');
var axios = require('axios');
var chamarDolar = require('./src/dolar');
var chamarBitcoin = require('./src/bitcoin');
const config = require('./src/config');
const twitter = require('twitter');
const client = new twitter(config);

async function App(){
const dol = await chamarDolar.chamarDolar();
const bitc = await chamarBitcoin.chamarBitcoin();

console.log(bitc[0]);
client.post('statuses/update', { status: `Nas ultimas 24 horas, o Bitcoin vendeu ${bitc[1]} unidades, 
        com seu valor maior em R$ ${bitc[0]} .Valor do Dólar R$ ${dol[0]} 🐱‍👤.` }).then(result => {
    console.log('Tweet realizado com sucesso: "' + result.text + '"');
  }).catch(console.error);
}

App();