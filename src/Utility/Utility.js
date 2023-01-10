export const calculatePrice = (price) => {
    
    const x = parseFloat(price);
    var decimals =  x - Math.floor(x);

    var decimalPlaces = x.toString().split(".")[1].length;
    decimals = decimals.toFixed(decimalPlaces);
    return {
        dollar: Math.floor(x),
        cent: decimals.split(".")[1]
    }
  };