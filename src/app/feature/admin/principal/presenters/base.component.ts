import { LoggerService } from '@shared/service/logger/logger.service';

export class BaseComponent {

  constructor(private readonly loggerService: LoggerService) {
  }

  cargarDatos() {
    this.loggerService.log(this, 'holaaaaa');
  }

  enviarMensaje() {
    this.loggerService.log(this, 'holaaaaa 2');
  }

}
