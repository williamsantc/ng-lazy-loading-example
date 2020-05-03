import { Component, OnInit } from '@angular/core';
import { LandingInitialService } from '../../shared/service/landing-initial/landing-initial.service';
import { Observable } from 'rxjs';
import { ProductoModel } from '../../shared/model/producto.model';
import { HttpInterceptor } from '@angular/common/http';

@Component({
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements HttpInterceptor {

  public producto$: Observable<ProductoModel>;

  constructor(private readonly landingInitialService: LandingInitialService) { }

  // tslint:disable-next-line:ban-types
  ngOnInit(): NonNullable<any> {
    this.producto$ = this.landingInitialService.getInitialText();
  }

}
