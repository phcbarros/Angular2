import { Injectable } from 'angular2/core';
import { Car } from './car';
import { Cars } from './mock-car';

@Injectable()

export class CarService {
    public getCars(): Car[]{
        return Cars;
    }
    
    public getCarsSlowy(): Promise<Car[]>{
        return new Promise<Car[]>(resolse => setTimeout(() => resolse(Cars), 2000));
    }
}