import { Component, OnInit } from "angular2/core"
import { Car } from './car';
import { CarDetailComponent } from './car-detail.component';
import { CarService } from './car-service';

@Component({
    selector: "my-car",
    templateUrl: "app/view/car-master.html",
    directives: [CarDetailComponent],
    providers: [CarService]
})

export class CarComponent implements OnInit {
    public title: string = "Cadastro de veículos";
    public cars: Car[];
    public selectedCar : Car;
    
    constructor(private _carService: CarService){}
    
    public ngOnInit(){
        //this.cars = this._carService.getCars();
        this._carService.getCarsSlowy().then(cars => this.cars = cars);
    }
    
    public onSelect(car: Car) : void {
        this.selectedCar = car;
    }
    
}