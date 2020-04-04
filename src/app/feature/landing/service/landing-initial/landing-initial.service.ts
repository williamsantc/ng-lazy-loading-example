import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApiLandingInitialService } from '../api-landing-intial/api-landing-initial.service';
import { ProductoModel } from '@feature/landing/model/producto.model';
import { LoggerService } from '@shared/service/logger/logger.service';

@Injectable()
export class LandingInitialService {

  constructor(private readonly apiLandingInitialService: ApiLandingInitialService,
              private readonly loggerService: LoggerService) {
  }

  public getInitialText(): Observable<ProductoModel> {
    return this.apiLandingInitialService.getInitialText().pipe(
      tap(data => this.loggerService.log(this, `Data recibida: ${JSON.stringify(data)}`)),
      map(response => response.data),
      tap(data => this.loggerService.log(this, `Data mapeada: ${JSON.stringify(data)}`)),
    );
  }
}
