import { Component } from '@angular/core';
import { NgForm } from '@angular/common';

import { Hero } from './hero';

@Component({
    selector: 'hero-form',
    templateUrl: 'app/hero-form.component.html'
})
export class HeroFormComponent {
    powers: string[] = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Change'];
    model: Hero = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Noris');
    submitted: boolean = false;

    onSubmit() {
        this.submitted = true;
    }

    getDiagnostic() {
        return JSON.stringify(this.model);
    }
}