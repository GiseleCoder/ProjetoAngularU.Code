import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDeleteCadastroComponent } from './btn-delete-cadastro.component';

describe('BtnDeleteCadastroComponent', () => {
  let component: BtnDeleteCadastroComponent;
  let fixture: ComponentFixture<BtnDeleteCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnDeleteCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnDeleteCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
