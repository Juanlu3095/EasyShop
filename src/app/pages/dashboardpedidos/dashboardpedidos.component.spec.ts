import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardpedidosComponent } from './dashboardpedidos.component';

describe('DashboardpedidosComponent', () => {
  let component: DashboardpedidosComponent;
  let fixture: ComponentFixture<DashboardpedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardpedidosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardpedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
