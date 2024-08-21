import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasheditarnewsletterComponent } from './dasheditarnewsletter.component';

describe('DasheditarnewsletterComponent', () => {
  let component: DasheditarnewsletterComponent;
  let fixture: ComponentFixture<DasheditarnewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasheditarnewsletterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DasheditarnewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
