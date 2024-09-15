import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardcategoriasproductoComponent } from './dashboardcategoriasproducto.component';

describe('DashboardcategoriasproductoComponent', () => {
  let component: DashboardcategoriasproductoComponent;
  let fixture: ComponentFixture<DashboardcategoriasproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardcategoriasproductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardcategoriasproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
