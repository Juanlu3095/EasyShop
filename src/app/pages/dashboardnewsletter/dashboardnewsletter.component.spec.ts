import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardnewsletterComponent } from './dashboardnewsletter.component';

describe('DashboardnewsletterComponent', () => {
  let component: DashboardnewsletterComponent;
  let fixture: ComponentFixture<DashboardnewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardnewsletterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardnewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
