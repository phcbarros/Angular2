import {Component} from "angular2/core"
import { Car } from './car';

@Component({
    selector: "car-detail",
    templateUrl: "app/view/car-detail.html",
    inputs: ["car"]
})

export class CarDetailComponent {
    public car: Car;    
}