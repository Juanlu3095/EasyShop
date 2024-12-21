import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardmetodosenvioComponent } from './dashboardmetodosenvio.component';

describe('DashboardmetodosenvioComponent', () => {
  let component: DashboardmetodosenvioComponent;
  let fixture: ComponentFixture<DashboardmetodosenvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardmetodosenvioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardmetodosenvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
