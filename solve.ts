function formatString(input: string, toUpper?: boolean): string {
    return toUpper || toUpper === undefined ? input.toUpperCase() : input.toLocaleLowerCase();
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4).map(item => ({ title: item.title, rating: item.rating }));
}

const books = [
    { title: "Book A", rating: 3.5 },
    { title: "Book B", rating: 4 },
    { title: "Book C", rating: 5.0 }
];

function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((acc, array) => acc.concat(array), []);
}

class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    getInfo(): void {
        console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }

    getModel(): void {
        console.log(`Model: ${this.model}`);
    }
}

const myCar = new Car("Toyota", 2020, "Corolla");

function processValue(value: string | number): number {
    return typeof value === 'string' ? value.length : value * 2;
}

interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null;
    }
    return products.reduce((prev, current) => (prev.price > current.price ? prev : current));
}

const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 5 },
    { name: "Bag", price: 0 }
];

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    return day === Day.Saturday || day === Day.Sunday ? 'Weekend' : 'Weekday';
}

async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) {
                reject(new Error('Negative number not allowed'));
            } else {
                resolve(n * n);
            }
        }, 1000);
    });
}
