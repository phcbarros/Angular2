import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarCursoComponent } from './recuperar-curso.component';

describe('RecuperarCursoComponent', () => {
  let component: RecuperarCursoComponent;
  let fixture: ComponentFixture<RecuperarCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuperarCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
