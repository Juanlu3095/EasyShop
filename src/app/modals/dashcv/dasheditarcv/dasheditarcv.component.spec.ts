import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasheditarcvComponent } from './dasheditarcv.component';

describe('DasheditarcvComponent', () => {
  let component: DasheditarcvComponent;
  let fixture: ComponentFixture<DasheditarcvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasheditarcvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DasheditarcvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
