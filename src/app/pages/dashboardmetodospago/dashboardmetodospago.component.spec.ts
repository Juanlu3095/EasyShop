import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardmetodospagoComponent } from './dashboardmetodospago.component';

describe('DashboardmetodospagoComponent', () => {
  let component: DashboardmetodospagoComponent;
  let fixture: ComponentFixture<DashboardmetodospagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardmetodospagoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardmetodospagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
