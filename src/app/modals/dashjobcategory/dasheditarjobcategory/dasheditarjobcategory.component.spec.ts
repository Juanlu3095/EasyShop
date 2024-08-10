import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasheditarjobcategoryComponent } from './dasheditarjobcategory.component';

describe('DasheditarjobcategoryComponent', () => {
  let component: DasheditarjobcategoryComponent;
  let fixture: ComponentFixture<DasheditarjobcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasheditarjobcategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DasheditarjobcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
