import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Cadastro } from 'src/app/models/cadastro.model';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-btn-edit-cadastro',
  templateUrl: './btn-edit-cadastro.component.html',
  styleUrls: ['./btn-edit-cadastro.component.css']
})
export class BtnEditCadastroComponent implements OnInit {

  @Input() cadastro!: Cadastro;

  cadastroForm!: FormGroup;
  cadastroFormBsModalRef!: BsModalRef;
  cadastros: Cadastro[] = [];
  nome!: string;
  cpf!: string;
  endereco!: string;
  telefone!: string;
  email!: string
  
  constructor(
    private bsModalService: BsModalService,
    private cadastroService: CadastroService
  ) { }

  ngOnInit(): void {
    this.cadastroForm = new FormGroup({
      nome: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
      cpf: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern("[0-9]*$")]),
      endereco: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(40)]),
      telefone: new FormControl(null, [Validators.required, Validators.minLength(9), Validators.maxLength(15)]),
      email: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)])

    })
    this.nome = this.cadastro.nome;
    this.cpf = this.cadastro.cpf;
    this.endereco = this.cadastro.endereco;
    this.telefone = this.cadastro.telefone;
    this.email = this.cadastro.email
  }

  openCadastroFormModal(template: TemplateRef<any>) {
    this.cadastroFormBsModalRef = this.bsModalService.show(template, {
      class: 'moda-sl modal-dialog-centered',
      ignoreBackdropClick: true,
      keyboard: false
    })
  }

  closeModalCadastroForm(): void {
    this.cadastroFormBsModalRef.hide();
  }

  editCadastro() {
    this.closeModalCadastroForm();
    this.cadastroService.editCadastro(this.cadastro.id, this.cadastroForm.value.nome, this.cadastroForm.value.cpf
      ,this.cadastroForm.value.endereco, this.cadastroForm.value.telefone, this.cadastroForm.value.email).subscribe(cadastro =>{
      alert(`${this.cadastroForm.value.nome} editado com sucesso`)
    })
  }
}
