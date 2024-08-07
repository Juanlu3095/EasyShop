import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashnuevoempleoComponent } from './dashnuevoempleo.component';

describe('DashnuevoempleoComponent', () => {
  let component: DashnuevoempleoComponent;
  let fixture: ComponentFixture<DashnuevoempleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashnuevoempleoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashnuevoempleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
