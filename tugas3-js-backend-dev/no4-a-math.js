function calculateCircle(radius) {
    if (radius <= 0) {
        return "Jari-jari harus lebih besar dari nol";
    }
    const pi = Math.PI;
    const area = pi * Math.pow(radius, 2);
    return area;
}
  
const radius1 = 5;
const radius2 = 10;
  
console.log(`Luas lingkaran dengan jari-jari ${radius1} adalah ${calculateCircle(radius1)}`);
console.log(`Luas lingkaran dengan jari-jari ${radius2} adalah ${calculateCircle(radius2)}`);
  