import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasheliminarnewsletterComponent } from './dasheliminarnewsletter.component';

describe('DasheliminarnewsletterComponent', () => {
  let component: DasheliminarnewsletterComponent;
  let fixture: ComponentFixture<DasheliminarnewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasheliminarnewsletterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DasheliminarnewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
