System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ProgressBarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ProgressBarComponent = (function () {
                function ProgressBarComponent(zone) {
                    this.zone = zone;
                    this.progress = 0;
                }
                ProgressBarComponent.prototype.processWithAngularZone = function () {
                    this.progress = 0;
                    this.bar = '';
                    this.increaseProgress(function () { return console.log('Done!'); });
                };
                ProgressBarComponent.prototype.increaseProgress = function (doneCallback) {
                    var _this = this;
                    this.progress += 1;
                    this.bar += '|';
                    console.log("Current progress: " + this.progress + "%");
                    if (this.progress < 100) {
                        window.setTimeout(function () {
                            _this.increaseProgress(doneCallback);
                        }, 10);
                    }
                    else {
                        doneCallback();
                    }
                };
                ProgressBarComponent.prototype.processOutSideAngularZone = function () {
                    var _this = this;
                    this.progress = 0;
                    this.bar = '';
                    //executa a função fora do contexto do angular (executa no NgZone pai), ou seja, o angular não sabe que o valor de progress foi alterado pois o evento onTurnDone não foi disparado
                    this.zone.runOutsideAngular(function () {
                        _this.increaseProgress(function () {
                            //informa ao angular que deve executar a detecção de mudança
                            _this.zone.run(function () {
                                console.log('OutSide Done!');
                            });
                        });
                    });
                };
                ProgressBarComponent = __decorate([
                    core_1.Component({
                        selector: "progress-bar",
                        template: "\n        <h3>Progress: {{bar}} {{progress}}%</h3>\n        <button (click)=\"processWithAngularZone()\">Process within Angular zone</button>\n        <button (click)=\"processOutSideAngularZone()\">Process outside Angular zone</button>\n    "
                    }), 
                    __metadata('design:paramtypes', [core_1.NgZone])
                ], ProgressBarComponent);
                return ProgressBarComponent;
            })();
            exports_1("ProgressBarComponent", ProgressBarComponent);
        }
    }
});
//# sourceMappingURL=progress-bar.component.js.map