import type { WheelOptions, WheelWeight } from './interface';

export default class Wheel implements WheelOptions {
    public readonly size: WheelWeight;
    public readonly weight: number;

    constructor({ size }: Pick<WheelOptions, 'size'>) {
        this.size = size;
        this.weight = size * 0.5;
    }
}