import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardmensajesComponent } from './dashboardmensajes.component';

describe('DashboardmensajesComponent', () => {
  let component: DashboardmensajesComponent;
  let fixture: ComponentFixture<DashboardmensajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardmensajesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardmensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
