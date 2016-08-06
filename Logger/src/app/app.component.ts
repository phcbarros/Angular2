import { Component } from '@angular/core';
import { Logger } from './model/logger';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  private logger: Logger;
  public title = 'Implementando LogService';

  constructor(logger: Logger) {
    this.logger = logger;
  }

  public test(level: string) {
    this.logger[level]('Executando o logService.%s()', level);
  }

  public group() {
    this.logger.group('console.group()');
    this.logger.info('console.info()');
    this.logger.error('console.error()');
    this.logger.warn('console.warn()');
    this.logger.log('console.log()');
    this.logger.groupEnd();
  }

}
