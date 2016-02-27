import { Component, NgZone } from 'angular2/core';

@Component({
    selector: "progress-bar",
    template: `
        <h3>Progress: {{bar}} {{progress}}%</h3>
        <button (click)="processWithAngularZone()">Process within Angular zone</button>
        <button (click)="processOutSideAngularZone()">Process outside Angular zone</button>
    ` 
})

export class ProgressBarComponent{
    public progress: number = 0;
    public bar: string;
    
    constructor(private zone: NgZone) {}
    
    public processWithAngularZone(): void{
        this.progress = 0;
        this.bar = '';
        this.increaseProgress(() => console.log('Done!'));
    }
    
    public increaseProgress(doneCallback: () => void): void {
        this.progress += 1;
        this.bar += '|';
        console.log(`Current progress: ${this.progress}%`);
        
        if(this.progress < 100) {
            window.setTimeout(() => {
                this.increaseProgress(doneCallback);
            }, 10);
        }
        else{
            doneCallback();
        }
    }
    
    public processOutSideAngularZone(){
        this.progress = 0;
        this.bar = '';
        //executa a função fora do contexto do angular (executa no NgZone pai), ou seja, o angular não sabe que o valor de progress foi alterado pois o evento onTurnDone não foi disparado
        this.zone.runOutsideAngular(() => {
            this.increaseProgress(() => {
                //informa ao angular que deve executar a detecção de mudança
                this.zone.run(() => {
                    console.log('OutSide Done!');
                });
            })
        });
    }
}