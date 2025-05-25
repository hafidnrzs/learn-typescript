/*
Tipe Data Primitif di Typescript

1. string
2. number
3. boolean
4. null
5. undefined
6. void
*/

let id_ = 5; // TS know it's a number
let firstName = "Danny"; // TS know it's string
let hasDogs = true; // TS know it's boolean (type inference)
// hasDogs = "yes";
let unit: number; // Declare variable without assigning a value
unit = 5;
firstName.toLowerCase();
console.log(firstName);

let arr = [1, 3, 5, 7];
arr.pop();
console.log(arr);

firstName = "Anna";

let age: string | number;
age = 26;
age = "26";

let lastName = new String("Danny");
console.log(lastName);

// Tipe Data: null dan undefined
let dataKosong: null = null;
let variabelBelumDiatur: string | undefined; // Nilai defaultnya undefined
console.log('\nContoh null dan undefined:');
console.log(dataKosong);
console.log(variabelBelumDiatur);

variabelBelumDiatur = 'Sekarang ada isinya' as string;
console.log(variabelBelumDiatur);

// Tipe Data: void
function showMessage(msg: string): void {
    console.log(`Message: ${msg}`);
    // Tidak ada 'return' statement di sini
}

// Fungsi tidak mengembalikan nilai, tapi memanggil fungsi lain
function processUserData(name: string, age: number): void {
    console.log(`Memroses data untuk ${name}, usia ${age} tahun.`);
    
    showMessage("Data pengguna berhasil diproses!");
}

console.log("\nContoh void:")
showMessage("Selamat pagi, dunia Typescript!");
processUserData("Andi", 25);