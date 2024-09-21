import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardeditarmarcaComponent } from './dashboardeditarmarca.component';

describe('DashboardeditarmarcaComponent', () => {
  let component: DashboardeditarmarcaComponent;
  let fixture: ComponentFixture<DashboardeditarmarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardeditarmarcaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardeditarmarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
