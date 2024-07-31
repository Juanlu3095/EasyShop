import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanalempleoComponent } from './canalempleo.component';

describe('CanalempleoComponent', () => {
  let component: CanalempleoComponent;
  let fixture: ComponentFixture<CanalempleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanalempleoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CanalempleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
