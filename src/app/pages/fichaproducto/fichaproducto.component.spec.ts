import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaproductoComponent } from './fichaproducto.component';

describe('FichaproductoComponent', () => {
  let component: FichaproductoComponent;
  let fixture: ComponentFixture<FichaproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaproductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FichaproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
