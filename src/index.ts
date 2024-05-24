import Motor from './game/motor';
import Wheel from './game/wheel';
import Vehicle from './game/vehicle';
import Speedway from './game/speedway';

// Motor
const v8 = new Motor({ type: 'v8' });
const v10 = new Motor({ type: 'v10' });
const v12 = new Motor({ type: 'v12' });
const electric = new Motor({ type: 'electric' });

// Wheel
const a14 = new Wheel({ size: 16 });
const a15 = new Wheel({ size: 15 });
const a17 = new Wheel({ size: 17 });
const a22 = new Wheel({ size: 22 });

// Car
const fusca = new Vehicle({ icon: '🚗', motor: v12, wheel: a17, year: 1967 });
const opala = new Vehicle({ icon: '🚓', motor: v10, wheel: a22, year: 1992 });
const tesla = new Vehicle({ icon: '🛵', motor: electric, wheel: a14, year: 2024 });
const pegout206 = new Vehicle({ icon: '🚙', motor: v8, wheel: a15, year: 1999 });

new Speedway([fusca, opala, pegout206, tesla])
    .startRace();