import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLoginComponentComponent } from './app.login-component.component';

describe('AppLoginComponentComponent', () => {
  let component: AppLoginComponentComponent;
  let fixture: ComponentFixture<AppLoginComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppLoginComponentComponent]
    });
    fixture = TestBed.createComponent(AppLoginComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
