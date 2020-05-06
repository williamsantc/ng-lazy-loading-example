import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssitedPresenterComponent } from './assited-presenter.component';

describe('AssitedPresenterComponent', () => {
  let component: AssitedPresenterComponent;
  let fixture: ComponentFixture<AssitedPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssitedPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssitedPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
