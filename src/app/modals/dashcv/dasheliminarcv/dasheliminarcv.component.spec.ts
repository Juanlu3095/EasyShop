import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasheliminarcvComponent } from './dasheliminarcv.component';

describe('DasheliminarcvComponent', () => {
  let component: DasheliminarcvComponent;
  let fixture: ComponentFixture<DasheliminarcvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasheliminarcvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DasheliminarcvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
