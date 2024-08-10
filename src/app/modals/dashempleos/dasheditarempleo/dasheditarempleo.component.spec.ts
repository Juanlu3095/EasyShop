import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasheditarempleoComponent } from './dasheditarempleo.component';

describe('DasheditarempleoComponent', () => {
  let component: DasheditarempleoComponent;
  let fixture: ComponentFixture<DasheditarempleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasheditarempleoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DasheditarempleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
