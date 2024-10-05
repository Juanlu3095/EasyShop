import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailverificadoComponent } from './emailverificado.component';

describe('EmailverificadoComponent', () => {
  let component: EmailverificadoComponent;
  let fixture: ComponentFixture<EmailverificadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailverificadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailverificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
