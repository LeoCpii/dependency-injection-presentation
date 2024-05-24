interface MotorOptions {
    ignition: boolean;
};

class ElectricMotor implements MotorOptions {
    public ignition: boolean
};

class CombustionMotor implements MotorOptions {
    public ignition: boolean
}

class Vehicle {
    constructor(private motor: MotorOptions) { }

    public start() {
        this.motor.ignition = true;
    }
}

const celtinha = new Vehicle(new CombustionMotor());
const tesla = new Vehicle(new ElectricMotor());

export default {};