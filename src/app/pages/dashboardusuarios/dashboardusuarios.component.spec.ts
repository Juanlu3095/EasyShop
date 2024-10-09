import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardusuariosComponent } from './dashboardusuarios.component';

describe('DashboardusuariosComponent', () => {
  let component: DashboardusuariosComponent;
  let fixture: ComponentFixture<DashboardusuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardusuariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
