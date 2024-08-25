import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasheliminarseleccioncvComponent } from './dasheliminarseleccioncv.component';

describe('DasheliminarseleccioncvComponent', () => {
  let component: DasheliminarseleccioncvComponent;
  let fixture: ComponentFixture<DasheliminarseleccioncvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasheliminarseleccioncvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DasheliminarseleccioncvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
