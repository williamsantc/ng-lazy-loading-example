import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApiLandingInitialService } from '../service/api-landing-initial.service';
import { ProductoModel } from '@feature/landing/shared/model/producto.model';
import { LoggerService } from '@shared/service/logger/logger.service';

@Injectable()
export class LandingInitialPresenter {

  private readonly some: string;

  constructor(private readonly apiLandingInitialService: ApiLandingInitialService,
              private readonly loggerService: LoggerService) {
                console.log('created!')
                this.some = '1';
  }

  public getInitialText(): Observable<ProductoModel> {
    return this.apiLandingInitialService.getInitialText().pipe(
      tap((data) => this.loggerService.log(this, `Data recibida: ${JSON.stringify(data)}`)),
      map((response) => response.data),
      tap((data) => this.loggerService.log(this, `Data mapeada: ${JSON.stringify(data)}`)),
    );
  }
}
