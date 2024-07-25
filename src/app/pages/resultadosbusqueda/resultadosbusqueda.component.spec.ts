import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosbusquedaComponent } from './resultadosbusqueda.component';

describe('ResultadosbusquedaComponent', () => {
  let component: ResultadosbusquedaComponent;
  let fixture: ComponentFixture<ResultadosbusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultadosbusquedaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultadosbusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
