import { Component, OnInit } from "angular2/core"
import { Router } from 'angular2/router';
import { Car } from './car';
import { CarDetailComponent } from './car-detail.component';
import { CarService } from './car-service';

@Component({
    templateUrl: "app/view/car-master.html",
    directives: [CarDetailComponent]
})

export class CarMasterComponent implements OnInit {
    public title: string = "Cadastro de veículos";
    public cars: Car[];
    public selectedCar : Car;
    
    constructor(private _carService: CarService, private _router: Router){}
    
    public ngOnInit(){
        this.cars = this._carService.getCars();
        //this._carService.getCarsSlowy().then(cars => this.cars = cars);
    }
    
    public onSelect(car: Car) : void {
        this._router.navigate(["CarDetail", { id: car.id }]);
    }
        
}