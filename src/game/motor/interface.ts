export interface MotorOptions {
    weight: number;
    type: MotorTypes;
}

export type MotorTypes = 'v8' | 'v10' | 'v12' | 'electric';