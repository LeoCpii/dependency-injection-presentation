import type { MotorOptions, MotorTypes } from './interface';

type WeightMap = { [T in MotorTypes]: number };

export default class Motor implements MotorOptions {
    private static readonly WEIGHT_MAP: WeightMap = { v8: 200, v10: 250, v12: 300, electric: 100 };

    public readonly weight: number;
    public readonly type: MotorTypes;

    constructor({ type }: Pick<MotorOptions, 'type'>) {
        this.type = type;
        this.weight = Motor.WEIGHT_MAP[type];
    }
}