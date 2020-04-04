import { Component, OnInit } from '@angular/core';
import { LandingInitialService } from '../../service/landing-initial/landing-initial.service';
import { Observable } from 'rxjs';
import { ProductoModel } from '../../model/producto.model';

@Component({
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  public producto$: Observable<ProductoModel>;

  constructor(private readonly landingInitialService: LandingInitialService) { }

  ngOnInit(): void {
    this.producto$ = this.landingInitialService.getInitialText();
  }

}
