import { ComponentFixture, TestBed } from '@angular/core/testing';



describe('AppOrderComponentComponent', () => {
  let component: AppOrderComponentComponent;
  let fixture: ComponentFixture<AppOrderComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppOrderComponentComponent]
    });
    fixture = TestBed.createComponent(AppOrderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
