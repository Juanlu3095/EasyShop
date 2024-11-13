import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardcuponesComponent } from './dashboardcupones.component';

describe('DashboardcuponesComponent', () => {
  let component: DashboardcuponesComponent;
  let fixture: ComponentFixture<DashboardcuponesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardcuponesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardcuponesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
