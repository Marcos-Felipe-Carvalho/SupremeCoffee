import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropostaProjetoComponent } from './proposta-projeto.component';

describe('PropostaProjetoComponent', () => {
  let component: PropostaProjetoComponent;
  let fixture: ComponentFixture<PropostaProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropostaProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropostaProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
