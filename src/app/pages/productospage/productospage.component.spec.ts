import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductospageComponent } from './productospage.component';

describe('ProductospageComponent', () => {
  let component: ProductospageComponent;
  let fixture: ComponentFixture<ProductospageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductospageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductospageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
