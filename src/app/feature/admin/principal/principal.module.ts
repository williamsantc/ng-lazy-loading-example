import { NgModule } from '@angular/core';
import { PrincipalComponent } from '@feature/admin/principal/principal.component';
import { AssitedPresenterComponent } from '@feature/admin/principal/presenters/assited-presenter/assited-presenter.component';
import { SelfManagedPresenterComponent } from '@feature/admin/principal/presenters/self-managed-presenter/self-managed-presenter.component';

@NgModule({
  declarations: [PrincipalComponent, AssitedPresenterComponent, SelfManagedPresenterComponent]
})
export class PrincipalModule { }
