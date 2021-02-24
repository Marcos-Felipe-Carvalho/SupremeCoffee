import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarProjetoComponent } from './publicar-projeto.component';

describe('PublicarProjetoComponent', () => {
  let component: PublicarProjetoComponent;
  let fixture: ComponentFixture<PublicarProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicarProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
