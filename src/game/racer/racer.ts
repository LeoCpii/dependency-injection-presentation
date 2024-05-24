import { uuid } from '../../utils';
import type { VehicleOptions } from '../vehicle';
import type { RacerOptions, Position } from './interface';

export default class Racer implements RacerOptions {
    public readonly id = uuid();
    public vehicle: VehicleOptions;

    public position: Position;

    constructor(vehicle: VehicleOptions, position: Position) {
        this.vehicle = vehicle;
        this.position = position;
    }

    public move(): void {
        const position = this.position - Math.floor(Math.random() * 4);

        this.position = position <= 0 ? 1 : position as Position;
    }
}
