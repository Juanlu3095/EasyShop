import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasheliminarjobcategoryComponent } from './dasheliminarjobcategory.component';

describe('DasheliminarjobcategoryComponent', () => {
  let component: DasheliminarjobcategoryComponent;
  let fixture: ComponentFixture<DasheliminarjobcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasheliminarjobcategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DasheliminarjobcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
