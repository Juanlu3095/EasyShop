import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardproductsnuevoComponent } from './dashboardproductsnuevo.component';

describe('DashboardproductsnuevoComponent', () => {
  let component: DashboardproductsnuevoComponent;
  let fixture: ComponentFixture<DashboardproductsnuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardproductsnuevoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardproductsnuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
