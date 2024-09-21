import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardmarcasComponent } from './dashboardmarcas.component';

describe('DashboardmarcasComponent', () => {
  let component: DashboardmarcasComponent;
  let fixture: ComponentFixture<DashboardmarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardmarcasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardmarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
