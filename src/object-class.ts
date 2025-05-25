// Object Types - Class
class Vehicle {
    // Properties (data/attribute) dari kelas Vehicle
    brand: string;
    color: string;
    speed: number;

    constructor(brand: string, color: string) {
        this.brand = brand;
        this.color = color;
        this.speed = 0;
        console.log(`A new ${this.color} ${this.brand} vehicle has been created!`);
    }

    // Method (function/behavior) dari kelas Vehicle
    accelerate(amount: number): void {
        this.speed += amount;
        console.log(`${this.brand} accelerates to ${this.speed} km/h.`);
    }

    brake(amount: number): void {
        this.speed -= amount;
        if (this.speed < 0) {
            this.speed = 0;
        }
        console.log(`${this.brand} reduces speed to ${this.speed} km/h.`);
    }

    honk(): string {
        return "Beep! Beep!";
    }
}

// Buat instance (object) dari Class
console.log("\nCreating Vehicle Objects");

const sportsCar = new Vehicle("Ferrari", "Red");

// Mengakses properti dari objek
console.log(`Brand: ${sportsCar.brand}`);
console.log(`Color: ${sportsCar.color}`);
console.log(`Initial speed: ${sportsCar.speed} km/h`);

// Panggil object method
sportsCar.accelerate(50);
sportsCar.brake(20);
console.log(sportsCar.honk());

const familyCar = new Vehicle("Toyota", "Silver");
familyCar.accelerate(20);
familyCar.brake(10);
console.log(familyCar.honk());