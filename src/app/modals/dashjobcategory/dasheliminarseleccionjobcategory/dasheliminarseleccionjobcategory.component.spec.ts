import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasheliminarseleccionjobcategoryComponent } from './dasheliminarseleccionjobcategory.component';

describe('DasheliminarseleccionjobcategoryComponent', () => {
  let component: DasheliminarseleccionjobcategoryComponent;
  let fixture: ComponentFixture<DasheliminarseleccionjobcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasheliminarseleccionjobcategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DasheliminarseleccionjobcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
