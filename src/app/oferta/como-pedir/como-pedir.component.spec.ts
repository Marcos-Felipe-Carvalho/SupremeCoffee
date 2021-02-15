import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoPedirComponent } from './como-pedir.component';

describe('ComoPedirComponent', () => {
  let component: ComoPedirComponent;
  let fixture: ComponentFixture<ComoPedirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComoPedirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoPedirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
