const bitcoinPrice = Math.floor(Math.random() * 3);

const whatIsTheBtcPrice = () => {
    if (bitcoinPrice === 0) {
        return console.log('- Hmm, by the way the market is looking today I can’t come up with a Bitcoin price prediction.');
    } else if (bitcoinPrice === 1) {
        return console.log('- Woow, based on the last few days I can assure you that nobody knows what the Bitcoin price will be tomorrow.');
    } else if (bitcoinPrice === 2) {
        return console.log('- OMG! THE MARKET IS WILD! Looking on all the evidences right now the Bitcoin price has only three options: Go up, Go down or Stays the same!');
    }
}

whatIsTheBtcPrice()