import type Wheel from '../wheel';
import type Motor from '../motor';

export interface VehicleOptions {
    icon: Icon;
    motor: Motor;
    wheel: Wheel;
    year: number;
}

export type Icon = typeof icons[number];

export const icons = ['🚗', '🚓', '🚕', '🚙', '🚐', '🚌', '🚜', '🛵'] as const;