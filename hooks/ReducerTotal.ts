export function ReducerTotal(cart) {
  
  const total = cart.reduce((acc, currentValue)=> {
      let totalForProduct = parseFloat(currentValue.price) * parseInt(currentValue.amount);
      return totalForProduct + acc;
    }, 0)

  return total.toFixed(2);
}
