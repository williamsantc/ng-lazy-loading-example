import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfManagedPresenterComponent } from './self-managed-presenter.component';

describe('SelfManagedPresenterComponent', () => {
  let component: SelfManagedPresenterComponent;
  let fixture: ComponentFixture<SelfManagedPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfManagedPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfManagedPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
