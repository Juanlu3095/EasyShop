import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallepagotarjetaComponent } from './detallepagotarjeta.component';

describe('DetallepagotarjetaComponent', () => {
  let component: DetallepagotarjetaComponent;
  let fixture: ComponentFixture<DetallepagotarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallepagotarjetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallepagotarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
