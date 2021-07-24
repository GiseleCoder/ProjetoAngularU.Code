import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnEditCadastroComponent } from './btn-edit-cadastro.component';

describe('BtnEditCadastroComponent', () => {
  let component: BtnEditCadastroComponent;
  let fixture: ComponentFixture<BtnEditCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnEditCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnEditCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
