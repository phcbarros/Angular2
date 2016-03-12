import {Component, OnInit} from "angular2/core"
import { RouteParams } from 'angular2/router';
import { Car } from './car';
import { CarService } from './car-service';

@Component({
    templateUrl: "app/view/car-detail.html",
    inputs: ["car"]
})

export class CarDetailComponent implements OnInit {
    public car: Car;
    
    constructor(private _routeParams: RouteParams, private _carService: CarService){}
    
    public ngOnInit(){
       let id = <number><any>this._routeParams.get("id");
       //this._carService.getCarSlowy(id).then(car => this.car = car);
       this.car = this._carService.getCar(id);
    }    
}