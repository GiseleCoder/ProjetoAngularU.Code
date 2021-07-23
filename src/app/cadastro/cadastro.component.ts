import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Cadastro } from '../models/cadastro.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastroForm!: FormGroup;
  cadastro: Cadastro[] = [];

  @Output() cadastroCreated = new EventEmitter<any>();

  dateConfig: BsDatepickerConfig = new BsDatepickerConfig();

  constructor() { }

  ngOnInit(): void {
    this.cadastroForm = new FormGroup({
      nome: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(60)]),
      cpf: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern('^[0-9]*$')]),
      endereco: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      dataNascimento: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      telefone: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      email: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
      senha: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)])
    });
    this.dateConfig.containerClass = 'theme-dark-blue';
  }

  closeCadastroForm(): void {
    
  }

  createCadastro(){
    this.cadastro.push(this.cadastroForm.value);
    console.log(this.cadastroForm.value);
    this.cadastroCreated.emit(this.cadastroForm.value);
  }

}
