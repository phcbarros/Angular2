import {Component} from "angular2/core"

interface Car {
    id: number;
    brand: string;
    model: string;
}

@Component({
    selector: "my-car",
    template: `
        <div class="container">
            <h1>{{title}}</h1>
            <h2>Marca: {{car.brand}}</h2>
            <h2>Modelo: {{car.model}}</h2>
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label for="">Marca:</label>
                        <input type="text" class="form-control" [(ngModel)]="car.brand" placeholder="Marca do veículo">
                    </div>
                    <div class="form-group">
                        <label for="">Modelo:</label>
                        <input type="text" class="form-control" [(ngModel)]="car.model" placeholder="Modelo do veículo">
                    </div>
                </div>
            </div>
        </div> 
    `
})

export class CarComponent {
    public title: string = "Cadastro de veículos";
    public car: Car = {
        id: 1,
        brand: "BMW",
        model: "X6"  
    };
}