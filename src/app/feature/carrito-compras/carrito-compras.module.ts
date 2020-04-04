import { NgModule } from '@angular/core';
import { PrincipalComponent } from './components/principal/principal.component';
import { CarritoComprasRoutingModule } from './carrito-compras-routing.module';

@NgModule({
  declarations: [PrincipalComponent],
  imports: [CarritoComprasRoutingModule]
})
export class CarritoComprasModule { }
