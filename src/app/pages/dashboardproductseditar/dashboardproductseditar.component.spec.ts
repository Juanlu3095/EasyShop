import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardproductseditarComponent } from './dashboardproductseditar.component';

describe('DashboardproductseditarComponent', () => {
  let component: DashboardproductseditarComponent;
  let fixture: ComponentFixture<DashboardproductseditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardproductseditarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardproductseditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
