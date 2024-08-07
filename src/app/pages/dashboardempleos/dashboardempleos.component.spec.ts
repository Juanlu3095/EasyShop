import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardempleosComponent } from './dashboardempleos.component';

describe('DashboardempleosComponent', () => {
  let component: DashboardempleosComponent;
  let fixture: ComponentFixture<DashboardempleosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardempleosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardempleosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
