import { NgModule } from '@angular/core';
import { PrincipalComponent } from './components/principal/principal.component';
import { MisionComponent } from './components/mision/mision.component';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingInitialPresenter } from './components/principal/presenter/landing-initial.presenter';
import { ApiLandingInitialService } from './components/principal/service/api-landing-initial.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PrincipalComponent, MisionComponent],
  imports: [LandingRoutingModule, HttpClientModule, CommonModule],
  providers: [LandingInitialPresenter, ApiLandingInitialService]
})
export class LandingModule {}
