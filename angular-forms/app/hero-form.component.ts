import { Component } from '@angular/core';
import { NgForm } from '@angular/common';

import { Hero } from './hero';

@Component({
    selector: 'hero-form',
    templateUrl: 'app/hero-form.component.html'
})
export class HeroFormComponent {
    powers: string[] = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Change'];
    model: Hero = new Hero(0, '', '');
    submitted: boolean = false;
    active: boolean = true;

    onSubmit() {
        this.submitted = true;
    }

    newHero() {
        this.model = new Hero(42, this.model.name, this.model.power, this.model.alterEgo);
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    edit(){
        this.submitted = false;
    }

    getDiagnostic() {
        return JSON.stringify(this.model);
    }
}