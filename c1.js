function adjacentElementsProduct(inputArray) {
  if (inputArray.length < 2) {
    return "Không tìm thấy";
  }
  let maxProduct = -Infinity;
  let maxPair = [];

  for (let i = 0; i < inputArray.length - 1; i++) {
    const currentProduct = inputArray[i] * inputArray[i + 1];
    if (currentProduct > maxProduct) {
      maxProduct = currentProduct;
      maxPair = [inputArray[i], inputArray[i + 1]];
    }
  }
  console.log("2 số lớn nhất là",maxPair)
  return maxProduct;
}


const inputArray = [2, 3, -10, 20, 4];
const maxProduct = adjacentElementsProduct(inputArray);

console.log("Tích 2 số lớn nhất là:", maxProduct); 
