function kuadratNum(numbers) {
 return numbers.map(number => number * number);
}
  
const array = [1, 2, 3, 4, 5, 6, 7];
const arrayKuadrat = kuadratNum(array);
  
console.log("Array awal:", array);
console.log("Array dikuadratkan:", arrayKuadrat);
  