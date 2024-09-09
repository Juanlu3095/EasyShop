import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasheditarmediaComponent } from './dasheditarmedia.component';

describe('DasheditarmediaComponent', () => {
  let component: DasheditarmediaComponent;
  let fixture: ComponentFixture<DasheditarmediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasheditarmediaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DasheditarmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
