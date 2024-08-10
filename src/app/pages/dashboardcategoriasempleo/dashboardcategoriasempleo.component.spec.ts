import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardcategoriasempleoComponent } from './dashboardcategoriasempleo.component';

describe('DashboardcategoriasempleoComponent', () => {
  let component: DashboardcategoriasempleoComponent;
  let fixture: ComponentFixture<DashboardcategoriasempleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardcategoriasempleoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardcategoriasempleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
