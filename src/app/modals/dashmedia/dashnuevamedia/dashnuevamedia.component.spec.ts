import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasnnuevamediaComponent } from './dasnnuevamedia.component';

describe('DasnnuevamediaComponent', () => {
  let component: DasnnuevamediaComponent;
  let fixture: ComponentFixture<DasnnuevamediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasnnuevamediaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DasnnuevamediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
