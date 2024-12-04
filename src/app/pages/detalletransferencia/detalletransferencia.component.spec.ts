import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalletransferenciaComponent } from './detalletransferencia.component';

describe('DetalletransferenciaComponent', () => {
  let component: DetalletransferenciaComponent;
  let fixture: ComponentFixture<DetalletransferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalletransferenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalletransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
