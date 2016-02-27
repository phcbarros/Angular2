import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-hero-detail',
    styleUrls: ['app/hero-detail.component/hero-detail.component.css'],
    templateUrl: 'app/hero-detail.component/hero-detail.component.html',
})

export class HeroDetailComponent implements OnInit {
    public hero: Hero;
    
    constructor(
        private _heroService: HeroService, 
        private _routeParams: RouteParams){            
    }
    
    public ngOnInit(){
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id)
            .then(hero => this.hero = hero);
    }
    
    public goBack(): void {
        window.history.back();
    }
}