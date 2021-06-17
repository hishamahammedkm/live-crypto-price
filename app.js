let ws =new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade')
let stockPriceElement = document.getElementById('stock-price')
let lastPrice = null
ws.onmessage = (event)=>{
    let stockObj = JSON.parse(event.data)
    let price = parseFloat(stockObj.p)
    stockPriceElement.innerText =price
// .toFixed(2) for avoid decimal
    stockPriceElement.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ?  'green' : 'red'
    lastPrice = price
}