import { Injectable } from 'angular2/core';
import { Car } from './car';
import { Cars } from './mock-car';

@Injectable()

export class CarService {
    public getCars(): Car[]{
        return Cars;
    }
    
    public getCarsSlowy(): Promise<Car[]>{
        return new Promise<Car[]>(resolve => setTimeout(() => resolve(Cars), 2000));
    }
    
    public getCar(id: number): Car{
        return Cars.filter(car => {
            return car.id == id
        })[0];
    }
    
    public getCarSlowy(id: number): Promise<Car>{
        return Promise.resolve(Cars.filter(car => {
            return car.id === id;
        })[0]);
    }
}