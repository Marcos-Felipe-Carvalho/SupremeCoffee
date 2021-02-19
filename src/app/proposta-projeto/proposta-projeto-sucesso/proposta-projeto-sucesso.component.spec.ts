import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropostaProjetoSucessoComponent } from './proposta-projeto-sucesso.component';

describe('PropostaProjetoSucessoComponent', () => {
  let component: PropostaProjetoSucessoComponent;
  let fixture: ComponentFixture<PropostaProjetoSucessoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropostaProjetoSucessoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropostaProjetoSucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
