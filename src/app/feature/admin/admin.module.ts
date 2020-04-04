import { NgModule } from '@angular/core';
import { PrincipalComponent } from './principal/principal.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [PrincipalComponent],
  imports: [AdminRoutingModule]
})
export class AdminModule { }
