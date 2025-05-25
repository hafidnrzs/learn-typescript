/*
unknown (The Safe any)

dikenalkan di TypeScript 3.0
- bisa assign nilai dari tipe apa pun ke variabel bertipe unknown
- type checking ketat: tidak bisa melakukan operasi apa pun pada value bertipe data unknown
  (seperti akses properti, panggil method, atau operasi)
- mengurangi kemungkinan runtime errors
*/
console.log("\n--- Type Data: unknown ---");

let someValue: unknown;

someValue = 10;
someValue = "Hello TypeScript";
someValue = true;
someValue = { name: "John" };

// Pemeriksaan tipe diperlukan sebelum menggunakan
// console.log(someValue.name); // error: 'somevalue' is of type 'unknown'.
// someValue.toUpperCase();

if (typeof someValue === "string") {
    console.log(someValue.toUpperCase());
} else if (
    typeof someValue === "object" &&
    someValue !== null &&
    "name" in someValue
) {
    console.log(`Name from object: ${someValue.name}`);
}

someValue = "Hello Typescript!";
let fixedValue: string;
// fixedValue = someValue; // error. Type 'unknown' is not assignable to type 'string'.

if (typeof someValue === "string") {
    fixedValue = someValue;
    console.log(fixedValue);
}

/*
any (The Wildcard)

- dapat mengandung nilai apapun. Sama seperti unknown.
- tanpa type checking
- mengabaikan kesalahan, bisa ada potensi runtime error yang tidak terdeteksi saat kompilasi
*/
console.log("\n--- Type Data: any ---");

let anythingValue: any;

anythingValue = 10;
anythingValue = "Hello Any";
anythingValue = { age: 25 };

// OK saat compile, tapi akan error di runtime karena tipe data anythingValue sekarang bukan string, tidak bisa pakai string method.
// console.log(anythingValue.toUpperCase());

anythingValue = 10;
console.log(anythingValue.toFixed(2));

// OK, any bisa di-assign ke type apa pun tanpa warning
let myString: string = anythingValue;
console.log(myString);

/*
never (The Impossible Type)

kebalikan dari unknown, merepresentasikan tipe nilai yang tidak pernah terjadi
- tidak mungkin terjadi: fungsi yang return never berarti tidak akan pernah meneyelesaikan eksekusinya dengan sukses.
- digunakan untuk pemastian kelengkapan (Exhaustiveness Checking)
- tidak dapat di-assign tipe apa pun
*/

console.log("\n--- Tipe Data: never ---");

function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
        console.log("Looping forever...");
    }
}

// contoh Exhaustiveness Checking
interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

interface Triangle {
    kind: "triangle";
    sideLength: number;
    height: number;
}

type Shape = Circle | Square | Triangle;

function getArea(shape: Shape): number | never {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        case "triangle":
            return (shape.sideLength * shape.height) / 2;
        default:
            // TypeScript akan memastikan semua kasus di atas ditangani di switch
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}

const myCircle: Circle = {
    kind: "circle",
    radius: 7,
};

console.log(`Area of circle: ${getArea(myCircle)}`);
console.log(`Area of unknown: ${getArea("unknown_shape" as any)}`);

try {
    // throwError("Something went terribly wrong!");
} catch (e) {
    // console.log(`Caught an error: ${e.message}`);
}

// tidak bisa juga assign value ke variabel dengan tipe never
let neverValue: never;
// neverValue = 10; // error: Type '10' is not assignable to type 'never'.
// neverValue = null; // Type 'null' is not assignable to type 'never'.
