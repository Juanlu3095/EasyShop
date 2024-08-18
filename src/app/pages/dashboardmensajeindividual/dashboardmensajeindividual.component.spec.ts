import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardmensajeindividualComponent } from './dashboardmensajeindividual.component';

describe('DashboardmensajeindividualComponent', () => {
  let component: DashboardmensajeindividualComponent;
  let fixture: ComponentFixture<DashboardmensajeindividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardmensajeindividualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardmensajeindividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
