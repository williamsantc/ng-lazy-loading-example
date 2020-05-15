import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ProductoModel } from '@feature/landing/shared/model/producto.model';
import { ApiResponseModel } from '@shared/model/api-response.model';
import { LoggerService } from '@shared/service/logger/logger.service';

@Injectable()
export class ApiLandingInitialService {
  constructor(private readonly loggerService: LoggerService) {
  }

  public getInitialText(): Observable<ApiResponseModel<ProductoModel>> {
    return of({data: {id: 1, cant: 20, nombre: 'martillo'}, notification: null}).pipe(delay(2000),
      tap(data => this.loggerService.log(this, `Data recibida backend: ${JSON.stringify(data)}`)));
  }
}
