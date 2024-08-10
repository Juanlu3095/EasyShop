import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasheliminarempleoComponent } from './dasheliminarempleo.component';

describe('DasheliminarempleoComponent', () => {
  let component: DasheliminarempleoComponent;
  let fixture: ComponentFixture<DasheliminarempleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasheliminarempleoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DasheliminarempleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
