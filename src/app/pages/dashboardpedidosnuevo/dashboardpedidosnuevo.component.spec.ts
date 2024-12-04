import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardpedidosnuevoComponent } from './dashboardpedidosnuevo.component';

describe('DashboardpedidosnuevoComponent', () => {
  let component: DashboardpedidosnuevoComponent;
  let fixture: ComponentFixture<DashboardpedidosnuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardpedidosnuevoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardpedidosnuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
