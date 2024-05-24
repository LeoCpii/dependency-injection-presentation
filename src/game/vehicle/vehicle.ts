import type { WheelOptions } from '../wheel';
import type { MotorOptions } from '../motor';
import type { VehicleOptions, Icon } from './interface';

export default class Vehicle implements VehicleOptions {
    public readonly icon: Icon;
    public readonly wheel: WheelOptions;
    public readonly motor: MotorOptions;
    public readonly year: number;

    constructor({ icon, motor, wheel, year }: VehicleOptions) {
        this.year = year;
        this.wheel = wheel;
        this.icon = icon;
        this.motor = motor;
    }
}