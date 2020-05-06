import { NgModule } from '@angular/core';
import { SharedServiceModule } from './service/shared-service.module';
import { AdDirectivePipe } from './pipe/ad-directive.pipe';
import { AdDirective } from './directives/ad.directive';

@NgModule({
  imports: [SharedServiceModule],
  declarations: [AdDirectivePipe, AdDirective]
})
export class SharedModule {}
