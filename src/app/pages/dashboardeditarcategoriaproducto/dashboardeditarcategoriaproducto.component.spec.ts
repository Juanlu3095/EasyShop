import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardeditarcategoriaproductoComponent } from './dashboardeditarcategoriaproducto.component';

describe('DashboardeditarcategoriaproductoComponent', () => {
  let component: DashboardeditarcategoriaproductoComponent;
  let fixture: ComponentFixture<DashboardeditarcategoriaproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardeditarcategoriaproductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardeditarcategoriaproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
