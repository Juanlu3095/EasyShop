import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaempleoComponent } from './ofertaempleo.component';

describe('OfertaempleoComponent', () => {
  let component: OfertaempleoComponent;
  let fixture: ComponentFixture<OfertaempleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfertaempleoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfertaempleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
