const updatePrices = async () => {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana&vs_currencies=usd');
        const data = await response.json();
        document.getElementById('btc-price').innerHTML = `$${data.bitcoin.usd}`;
        document.getElementById('eth-price').innerHTML = `$${data.ethereum.usd}`;
        document.getElementById('sol-price').innerHTML = `$${data.solana.usd}`;
    } catch (error) {
        console.log(error);
    }
};

updatePrices();

setInterval(() => {
    updatePrices();
}, 5000);
