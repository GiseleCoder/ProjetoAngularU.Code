import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Cadastro } from 'src/app/models/cadastro.model';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-btn-verificar-cadastrado',
  templateUrl: './btn-verificar-cadastrado.component.html',
  styleUrls: ['./btn-verificar-cadastrado.component.css']
})
export class BtnVerificarCadastradoComponent implements OnInit {

  @Input() verifica!: Cadastro;

  cadastroForm!: FormGroup;
  cadastroFormBsModalRef!: BsModalRef;
  verificar: Cadastro[] = [];
  nome!: string;
  cpf!: string;
  dataNascimento!: string;
  dataRecebimento!: string;
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
      dataNascimento: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      telefone: new FormControl(null, [Validators.required, Validators.minLength(9), Validators.maxLength(15)]),
      email: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
      dataRecebimento: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
 

    })
    this.nome = this.verifica.nome;
    this.cpf = this.verifica.cpf;
    this.dataNascimento = this.verifica.dataNascimento;
    this.endereco = this.verifica.endereco;
    this.telefone = this.verifica.telefone;
    this.email = this.verifica.email;
    this.dataRecebimento = this.verifica.dataRecebimento
  }

  openVerificaFormModal(template: TemplateRef<any>) {
    this.cadastroFormBsModalRef = this.bsModalService.show(template, {
      class: 'moda-sl modal-dialog-centered',
      ignoreBackdropClick: true,
      keyboard: false
    })
  }

  closeModalVerificaForm(): void {
    this.cadastroFormBsModalRef.hide();
  }

  verificaCadastro() {
    this.closeModalVerificaForm();
    this.cadastroService.editCadastroAdm(this.verifica.id, this.cadastroForm.value.nome, this.cadastroForm.value.cpf
      ,this.cadastroForm.value.dataNascimento, this.cadastroForm.value.endereco, this.cadastroForm.value.telefone, this.cadastroForm.value.email, this.cadastroForm.value.dataRecebimento).subscribe();
  }

}


