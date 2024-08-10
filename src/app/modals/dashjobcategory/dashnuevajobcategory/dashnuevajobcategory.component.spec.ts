import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashnuevajobcategoryComponent } from './dashnuevajobcategory.component';

describe('DashnuevajobcategoryComponent', () => {
  let component: DashnuevajobcategoryComponent;
  let fixture: ComponentFixture<DashnuevajobcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashnuevajobcategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashnuevajobcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
