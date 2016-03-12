System.register(['angular2/core', './mock-car'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mock_car_1;
    var CarService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_car_1_1) {
                mock_car_1 = mock_car_1_1;
            }],
        execute: function() {
            CarService = (function () {
                function CarService() {
                }
                CarService.prototype.getCars = function () {
                    return mock_car_1.Cars;
                };
                CarService.prototype.getCarsSlowy = function () {
                    return new Promise(function (resolve) { return setTimeout(function () { return resolve(mock_car_1.Cars); }, 2000); });
                };
                CarService.prototype.getCar = function (id) {
                    return mock_car_1.Cars.filter(function (car) {
                        return car.id == id;
                    })[0];
                };
                CarService.prototype.getCarSlowy = function (id) {
                    return Promise.resolve(mock_car_1.Cars.filter(function (car) {
                        return car.id === id;
                    })[0]);
                };
                CarService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CarService);
                return CarService;
            })();
            exports_1("CarService", CarService);
        }
    }
});
//# sourceMappingURL=car-service.js.map