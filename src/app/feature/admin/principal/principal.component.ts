import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { AdDirective } from '@shared/directives/ad.directive';
import { AssitedPresenterComponent } from '@feature/admin/principal/presenters/assited-presenter/assited-presenter.component';
import { SelfManagedPresenterComponent } from '@feature/admin/principal/presenters/self-managed-presenter/self-managed-presenter.component';

@Component({
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  private readonly FLOW = 'ASSITED';

  @ViewChild(AdDirective, {static: true}) adHost: AdDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.FLOW === 'ASSITED' ? AssitedPresenterComponent : SelfManagedPresenterComponent
    );
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
  }

}

// DOC: https://angular.io/guide/dynamic-component-loader
