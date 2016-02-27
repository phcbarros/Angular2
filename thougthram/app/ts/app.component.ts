import { Component } from 'angular2/core';
import { ProgressBarComponent } from './progress-bar.component';

@Component({
    selector: "my-app",
    template: "<progress-bar></progress-bar>",
    directives: [ProgressBarComponent]
})

export class AppComponent{
    
}