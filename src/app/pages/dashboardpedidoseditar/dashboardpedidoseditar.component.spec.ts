import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardpedidoseditarComponent } from './dashboardpedidoseditar.component';

describe('DashboardpedidoseditarComponent', () => {
  let component: DashboardpedidoseditarComponent;
  let fixture: ComponentFixture<DashboardpedidoseditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardpedidoseditarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardpedidoseditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
