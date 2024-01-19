import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSeedComponentComponent } from './app.seed-component.component';

describe('AppSeedComponentComponent', () => {
  let component: AppSeedComponentComponent;
  let fixture: ComponentFixture<AppSeedComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppSeedComponentComponent]
    });
    fixture = TestBed.createComponent(AppSeedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



