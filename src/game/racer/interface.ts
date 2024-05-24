import type Vehicle from '../vehicle';
import type { IntRange } from '../../interface';

export interface RacerOptions {
    id: string;
    vehicle: Vehicle;
    position: Position;
}

export type Position = IntRange<0, 36>;