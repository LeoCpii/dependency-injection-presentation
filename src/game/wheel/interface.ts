import type { IntRange } from '../../interface';

export type WheelWeight = IntRange<14, 23>;

export interface WheelOptions {
    weight: number;
    size: WheelWeight;
}
