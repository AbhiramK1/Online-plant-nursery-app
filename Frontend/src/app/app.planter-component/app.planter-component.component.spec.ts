import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPlanterComponentComponent } from './app.planter-component.component';

describe('AppPlanterComponentComponent', () => {
  let component: AppPlanterComponentComponent;
  let fixture: ComponentFixture<AppPlanterComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppPlanterComponentComponent]
    });
    fixture = TestBed.createComponent(AppPlanterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
