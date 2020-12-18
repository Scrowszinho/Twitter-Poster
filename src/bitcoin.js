var axios = require('axios');
module.exports = {
    chamarBitcoin:async () => {
    const valores = [];
    const bitPre = await axios.get('https://www.mercadobitcoin.net/api/BTC/ticker/');
    var valor = bitPre.data.ticker.high;
    var bitVolum = bitPre.data.ticker.vol;
    var valorBit = parseFloat(valor).toFixed(2)
    valores.push(valorBit,bitVolum);
    return valores;
    }
}