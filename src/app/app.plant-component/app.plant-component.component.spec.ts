import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPlantComponentComponent } from './app.plant-component.component';

describe('AppPlantComponentComponent', () => {
  let component: AppPlantComponentComponent;
  let fixture: ComponentFixture<AppPlantComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppPlantComponentComponent]
    });
    fixture = TestBed.createComponent(AppPlantComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
