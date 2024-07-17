var name = "Brian";
console.log("Nama dengan variable var:", name);

name = "rahma";
console.log("Nama diubah dengan var:", name);

let age = 17;
console.log("Umur dengan let:", age);

age = 90;
console.log("Umur diubah dengan let:", age);

const alamat = "jakarta";
console.log("alamat diubah dengan const:", alamat);

alamat = 'depok'; // Ini akan error

// Scoping var, let, dan const
if (true) {
  var cityVar = "jakarta";
  let cityLet = "surabaya";
  const cityConst = "bandung";
  console.log("Di dalam block scope if:");
  console.log("cityVar:", cityVar);  
  console.log("cityLet:", cityLet); 
  console.log("cityConst:", cityConst); 
}

console.log("Di luar block scope:");
console.log("cityVar:", cityVar); // var bisa diakses krn global scope
console.log("cityLet:", cityLet); // Error: let blok scope tdk bisa diakses
console.log("cityConst:", cityConst); // Error: let blok scope tdk bisa diakses
