import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablacompletaComponent } from './tablacompleta.component';

describe('TablacompletaComponent', () => {
  let component: TablacompletaComponent;
  let fixture: ComponentFixture<TablacompletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablacompletaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablacompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
