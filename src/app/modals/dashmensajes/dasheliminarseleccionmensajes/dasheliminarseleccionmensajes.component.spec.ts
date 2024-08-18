import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasheliminarseleccionmensajesComponent } from './dasheliminarseleccionmensajes.component';

describe('DasheliminarseleccionmensajesComponent', () => {
  let component: DasheliminarseleccionmensajesComponent;
  let fixture: ComponentFixture<DasheliminarseleccionmensajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasheliminarseleccionmensajesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DasheliminarseleccionmensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
