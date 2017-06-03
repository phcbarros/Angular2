import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  log(msg: string) {
    console.log(msg);
  }

}
