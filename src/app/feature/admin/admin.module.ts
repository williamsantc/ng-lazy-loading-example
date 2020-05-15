import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { SelfManagedPresenterComponent } from './principal/presenters/self-managed-presenter/self-managed-presenter.component';
import { PrincipalModule } from '@feature/admin/principal/principal.module';

@NgModule({
  imports: [AdminRoutingModule, PrincipalModule]
})
export class AdminModule { }
