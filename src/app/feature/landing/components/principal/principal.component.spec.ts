import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalComponent } from './principal.component';
import { LandingInitialPresenter } from '@feature/landing/components/principal/presenter/landing-initial.presenter';
import SpyObj = jasmine.SpyObj;
import createSpyObj = jasmine.createSpyObj;
import { of } from 'rxjs';
import { ProductoMock } from '@shared/mocks/Producto.mock';

describe('PrincipalComponent', () => {

  let component: PrincipalComponent;
  let fixture: ComponentFixture<PrincipalComponent>;
  let landingInitialService: SpyObj<LandingInitialPresenter>;

  beforeEach(async(() => {
    landingInitialService = createSpyObj(['getInitialText']);
    TestBed.configureTestingModule({
      declarations: [PrincipalComponent],
      providers: [
        {provide: LandingInitialPresenter, useValue: landingInitialService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(PrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should ngOnInit', () => {
    // Arrange
    landingInitialService.getInitialText.and.returnValue(of(ProductoMock.defaultMock()));

    // Act
    component.ngOnInit();
    component.producto$.subscribe((producto) => {

      // Assert
      expect(producto).toEqual(ProductoMock.defaultMock());
    });


  });
});
