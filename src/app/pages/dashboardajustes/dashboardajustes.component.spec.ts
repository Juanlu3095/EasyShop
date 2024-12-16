import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardajustesComponent } from './dashboardajustes.component';

describe('DashboardajustesComponent', () => {
  let component: DashboardajustesComponent;
  let fixture: ComponentFixture<DashboardajustesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardajustesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardajustesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
