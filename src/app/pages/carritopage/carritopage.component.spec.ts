import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritopageComponent } from './carritopage.component';

describe('CarritopageComponent', () => {
  let component: CarritopageComponent;
  let fixture: ComponentFixture<CarritopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritopageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarritopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
