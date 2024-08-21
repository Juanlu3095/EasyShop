import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasheliminarseleccionnewsletterComponent } from './dasheliminarseleccionnewsletter.component';

describe('DasheliminarseleccionnewsletterComponent', () => {
  let component: DasheliminarseleccionnewsletterComponent;
  let fixture: ComponentFixture<DasheliminarseleccionnewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasheliminarseleccionnewsletterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DasheliminarseleccionnewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
