import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasheliminarmensajeComponent } from './dasheliminarmensaje.component';

describe('DasheliminarmensajeComponent', () => {
  let component: DasheliminarmensajeComponent;
  let fixture: ComponentFixture<DasheliminarmensajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasheliminarmensajeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DasheliminarmensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
