//if else
process.stdin.setEncoding('utf8');

console.log('masukkan angka: ')

process.stdin.on('data', function(data) {
    const number = parseInt(data.trim());

    if (!isNaN(number)) {
        if (number % 2 === 0) {
            console.log(`${number} adalah angka genap.`);
        } else {
            console.log(`${number} adalah angka ganjil.`);
        }
        process.exit();
    } else {
        console.log('inputan yang Anda masukkan bukan angka');
    }
});
