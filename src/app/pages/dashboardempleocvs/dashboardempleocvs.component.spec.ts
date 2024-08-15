import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardempleocvsComponent } from './dashboardempleocvs.component';

describe('DashboardempleocvsComponent', () => {
  let component: DashboardempleocvsComponent;
  let fixture: ComponentFixture<DashboardempleocvsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardempleocvsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardempleocvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
