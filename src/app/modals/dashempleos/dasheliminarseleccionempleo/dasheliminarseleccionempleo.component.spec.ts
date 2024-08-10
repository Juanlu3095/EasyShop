import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasheliminarseleccionempleoComponent } from './dasheliminarseleccionempleo.component';

describe('DasheliminarseleccionempleoComponent', () => {
  let component: DasheliminarseleccionempleoComponent;
  let fixture: ComponentFixture<DasheliminarseleccionempleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasheliminarseleccionempleoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DasheliminarseleccionempleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
