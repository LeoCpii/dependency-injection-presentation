import Racer from '../racer';
import { getRandom, shuffle } from '../../utils';

import type Vehicle from '../vehicle';
import type { IntRange } from '../../interface';
import type { SpeedwayOptions } from './interface';

export default class Speedway implements SpeedwayOptions {
    public static readonly REF: IntRange<0, 36> = 20;
    public readonly racers: Racer[];
    public podium: Racer[] = [];

    constructor(vehicles: Vehicle[]) {
        this.racers = vehicles.map(vehicle => new Racer(vehicle, Speedway.REF));
    }

    get ref() {
        return Array.from(Array(Speedway.REF), () => '');
    }

    get racersPosition() {
        return this.racers.map(racer => {
            return this.ref.map((_, i) => {
                if (racer.position - 1 === i) { return racer.vehicle.icon; }

                if (i === 0) { return '|'; }

                return ' ';
            }).join('');
        }).join('\n');
    }

    private verifyPositions() {
        const remainingRacers = this.racers.filter(racer => this.podium.every(p => p.id !== racer.id));
        const podiumSlots = 3 - this.podium.length;

        const completedTheRace = remainingRacers.filter(racer => racer.position === 1);

        if (!completedTheRace.length) { return; }

        if (completedTheRace.length <= podiumSlots) {
            this.podium = [...this.podium, ...shuffle(completedTheRace)];
            return;
        }

        while (this.podium.length < 3) {
            const selected = getRandom(completedTheRace);

            if (this.podium.includes(selected)) { return; }

            this.podium.push(selected);
        }
    }

    private printPodium([first, second, third]: Racer[]) {
        return `
              _${first.vehicle.icon}_
         _${second.vehicle.icon}_| 1 |_${third.vehicle.icon}_
        | 2         3 |
        `;
    }

    private moveRacers() {
        this.racers.forEach(racer => racer.move());
    }

    private print() {
        const matriz = [
            this.ref.map(() => '-').join(''),
            this.racersPosition,
            this.ref.map(() => '-').join(''),
        ];

        matriz.forEach(i => console.log(i));
    }

    public startRace(): void {
        console.clear();
        this.print();
        const interval = setInterval(() => {
            console.clear();

            this.moveRacers();

            if (this.podium.length < 3) { this.verifyPositions(); }

            this.print();

            if (this.racers.every(racer => racer.position <= 1)) {
                clearInterval(interval);
                setTimeout(() => {
                    console.clear();
                    console.log(this.printPodium(this.podium));
                }, 1500);
            }
        }, 1500);
    }
}