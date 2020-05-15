import { Component, OnInit } from '@angular/core';
import { LandingInitialPresenter } from './presenter/landing-initial.presenter';
import { Observable } from 'rxjs';
import { ProductoModel } from '@feature/landing/shared/model/producto.model';

@Component({
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  public producto$: Observable<ProductoModel>;

  constructor(private readonly landingInitialService: LandingInitialPresenter) { }

  // tslint:disable-next-line:ban-types
  ngOnInit(): NonNullable<any> {
    this.producto$ = this.landingInitialService.getInitialText();
  }

}
