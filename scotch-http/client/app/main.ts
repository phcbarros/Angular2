import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { Logger } from './logger/model/logger';
import { ConsoleLoggerService } from './logger/services/console-logger.service';

import { AppComponent } from './app.component';

bootstrap(AppComponent, [
    HTTP_PROVIDERS, 
    { provide: Logger, useClass: ConsoleLoggerService } 
]);
