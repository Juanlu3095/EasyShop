import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardmetodotransferenciaComponent } from './dashboardmetodotransferencia.component';

describe('DashboardmetodopagoComponent', () => {
  let component: DashboardmetodotransferenciaComponent;
  let fixture: ComponentFixture<DashboardmetodotransferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardmetodotransferenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardmetodotransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
