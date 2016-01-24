import {Component} from "angular2/core"

interface Car {
    id: number;
    brand: string;
    model: string;
}

@Component({
    selector: "my-car",
    templateUrl: "app/view/car-master.html" 
})

export class CarComponent {
    public title: string = "Cadastro de veículos";
    public cars: Car[] = Cars;
    public selectedCar : Car;
    
    public onSelect(car: Car) : void {
        this.selectedCar = car;
    }
    
}

var Cars: Array<Car> = [
    { id: 1, brand: "BMW", model: "X6"},
    { id: 2, brand: "BMW", model: "X1"},
    { id: 3, brand: "Volkswagen", model: "Golf GT"},
    { id: 4, brand: "Chevrolet", model: "Cruze"},
    { id: 5, brand: "Ford", model: "Fusion"},
    { id: 6, brand: "Flat", model: "Bravo"},
    { id: 7, brand: "Mercedes", model: "C180"}
]