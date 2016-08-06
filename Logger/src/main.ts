import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { ConsoleLoggerService } from './app/service/console-logger.service';
import { Logger } from './app/model/logger';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  { provide: Logger, useClass: ConsoleLoggerService }
]);
