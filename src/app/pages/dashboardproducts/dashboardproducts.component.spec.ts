import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardproductsComponent } from './dashboardproducts.component';

describe('DashboardproductsComponent', () => {
  let component: DashboardproductsComponent;
  let fixture: ComponentFixture<DashboardproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardproductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
