export interface HornOptions {
    sound: string;
    volume: number;
    doSound(): void;
};

export class Horn implements HornOptions {
    constructor(public sound: string, public volume: number) { }

    public doSound(): void {
        console.log(`Playing ${this.sound} at ${this.volume} decibels`)
    }
}

export class Vehicle {
    constructor(private horn: HornOptions) { }

    public honk() {
        this.horn.doSound();
    }
}

const fusquinha = new Vehicle(new Horn('Pom Pom', 120));
const fiat147 = new Vehicle(new Horn('Beep Beep', 80));

export default {};