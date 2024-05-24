interface WheelOptions { }

class Wheel { }

// class MonsterTruckWheel implements WheelOptions { }

// Ex1 (RUIM): A classe carro instancia a classe roda
class Vehicle {
    private wheel: Wheel;

    constructor() {
        this.wheel = new Wheel();
    }
}


new Vehicle();

// ex2 (BOM): INJEÇÃO DE DEPENDÊNCIA - A classe carro recebe uma instância de roda em seu construtor
class Vehicle1 {
    constructor(private wheel: Wheel) { }
}

new Vehicle1(new Wheel());

// ex3 (MELHOR): INVERSÃO DE CONTROLE - A classe carro recebe uma instância de roda em seu construtor via interface
class Vehicle2 {
    constructor(private wheel: WheelOptions) { }
}

// new Vehicle2(new Wheel());
// new Car3(new MonsterTruckWheel());

export default {};