import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstafetaComponent } from './estafeta.component';

describe('EstafetaComponent', () => {
  let component: EstafetaComponent;
  let fixture: ComponentFixture<EstafetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstafetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstafetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
