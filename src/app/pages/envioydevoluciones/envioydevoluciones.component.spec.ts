import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioydevolucionesComponent } from './envioydevoluciones.component';

describe('EnvioydevolucionesComponent', () => {
  let component: EnvioydevolucionesComponent;
  let fixture: ComponentFixture<EnvioydevolucionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvioydevolucionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnvioydevolucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
