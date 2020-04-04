import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  // tslint:disable-next-line:ban-types
  public log(caller: Object, msg: string) {
    console.log(`Fuente: [${caller.constructor.name}] Mensaje: [${msg}]`);
  }
}
