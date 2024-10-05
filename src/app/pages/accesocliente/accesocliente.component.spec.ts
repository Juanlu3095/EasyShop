import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoclienteComponent } from './accesocliente.component';

describe('AccesoclienteComponent', () => {
  let component: AccesoclienteComponent;
  let fixture: ComponentFixture<AccesoclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccesoclienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccesoclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
