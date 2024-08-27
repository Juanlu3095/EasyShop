import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardmediaComponent } from './dashboardmedia.component';

describe('DashboardmediaComponent', () => {
  let component: DashboardmediaComponent;
  let fixture: ComponentFixture<DashboardmediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardmediaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
