import { NgModule } from '@angular/core';
import { PrincipalComponent } from './components/principal/principal.component';
import { MisionComponent } from './components/mision/mision.component';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingInitialService } from './shared/service/landing-initial/landing-initial.service';
import { ApiLandingInitialService } from './shared/service/api-landing-intial/api-landing-initial.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PrincipalComponent, MisionComponent],
  imports: [LandingRoutingModule, HttpClientModule, CommonModule],
  providers: [LandingInitialService, ApiLandingInitialService]
})
export class LandingModule {}
