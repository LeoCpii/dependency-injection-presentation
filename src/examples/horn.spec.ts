import { Horn, HornOptions } from './testability';
import { Vehicle } from './testability';


describe('Horn', () => {
    it('should play the sound', () => {
        const horn = new Horn('Pom Pom', 120);
        const doSoundSpy = jest.spyOn(horn, 'doSound');
        horn.doSound();
        expect(doSoundSpy).toHaveBeenCalled();
    });
});

describe('Vehicle', () => {
    const mockBuzina: HornOptions = {
        sound: 'Pom Pom',
        volume: 120,
        doSound: jest.fn(() => { })
    };

    it('should honk', () => {
        const vehicle = new Vehicle(mockBuzina);
        const honkSpy = jest.spyOn(vehicle, 'honk');
        vehicle.honk();
        expect(honkSpy).toHaveBeenCalled();
    });
});