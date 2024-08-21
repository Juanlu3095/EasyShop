import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashnuevanewsletterComponent } from './dashnuevanewsletter.component';

describe('DashnuevanewsletterComponent', () => {
  let component: DashnuevanewsletterComponent;
  let fixture: ComponentFixture<DashnuevanewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashnuevanewsletterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashnuevanewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
