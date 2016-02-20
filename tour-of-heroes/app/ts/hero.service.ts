import { Injectable } from 'angular2/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';

@Injectable()

export class HeroService {
    public getHeroes(): Promise<Hero[]>{
        return Promise.resolve(HEROES);
    }
    
    public getHeroesSlowy(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(HEROES), 2000)   
        );
    }
}