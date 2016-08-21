import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule, environment } from './app/';
import { disableDeprecatedForms, provideForms  } from '@angular/forms';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, [ 
  disableDeprecatedForms(), //desabilita modulo antigo de formulario
  provideForms() //abilita novo modulo de formulario
  ]);
