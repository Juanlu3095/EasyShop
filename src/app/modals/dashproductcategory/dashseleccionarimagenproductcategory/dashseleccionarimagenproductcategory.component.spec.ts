import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashseleccionarimagenproductcategoryComponent } from './dashseleccionarimagenproductcategory.component';

describe('DashseleccionarimagenproductcategoryComponent', () => {
  let component: DashseleccionarimagenproductcategoryComponent;
  let fixture: ComponentFixture<DashseleccionarimagenproductcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashseleccionarimagenproductcategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashseleccionarimagenproductcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
