import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: "my-dashboard",
    styleUrls: ['app/dashboard.component/dashboard.component.css'],
    templateUrl: "app/dashboard.component/dashboard.component.html"
})

export class DashboardComponent implements OnInit {
    public heroes: Array<Hero> = [];
    
    constructor(
        private _heroService: HeroService, 
        private _router: Router){}
    
    public ngOnInit(){
        this._heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1,5));    
    }
    
    public goToDetail(hero: Hero){
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    }
}