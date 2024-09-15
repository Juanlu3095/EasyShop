import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasheliminarproductcategoryComponent } from './dasheliminarproductcategory.component';

describe('DasheliminarproductcategoryComponent', () => {
  let component: DasheliminarproductcategoryComponent;
  let fixture: ComponentFixture<DasheliminarproductcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasheliminarproductcategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DasheliminarproductcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
