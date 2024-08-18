import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasheditarmensajeComponent } from './dasheditarmensaje.component';

describe('DasheditarmensajeComponent', () => {
  let component: DasheditarmensajeComponent;
  let fixture: ComponentFixture<DasheditarmensajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasheditarmensajeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DasheditarmensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
