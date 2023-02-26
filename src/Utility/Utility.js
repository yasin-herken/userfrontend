export const calculatePrice = (price) => {
  const x = parseFloat(price).toFixed(2);
  var decimals = x - Math.floor(x);
  var decimalPlaces = x.toString().split(".")[1].length;
  decimals = decimals.toFixed(decimalPlaces);
  return {
    dollar: Math.floor(x),
    cent: decimals.split(".")[1],
  };
};

export const capitalizeFirstLetter = (str) => {
  // converting first letter to uppercase
  const capitalized = str?.charAt(0).toUpperCase() + str?.slice(1);

  return capitalized;
};
