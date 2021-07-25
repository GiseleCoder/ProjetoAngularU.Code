import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Cadastro } from 'src/app/models/cadastro.model';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-btn-create-cadastro',
  templateUrl: './btn-create-cadastro.component.html',
  styleUrls: ['./btn-create-cadastro.component.css']
})
export class BtnCreateCadastroComponent implements OnInit {

  cadastroForm!: FormGroup;
  cadastroFormBsModalRef!: BsModalRef;
  cadastros: Cadastro[] = [];

  dateConfig: BsDatepickerConfig = new BsDatepickerConfig();
  
  constructor(
    private bsModalService: BsModalService,
    private cadastroService: CadastroService
  ) { }

  @Output() cadastroCreated = new EventEmitter<any> ();
  
  ngOnInit(): void {
    this.cadastroForm = new FormGroup({
      nome: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
      cpf: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern("[0-9]*$")]),
      endereco: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(40)]),
      dataNascimento: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      telefone: new FormControl(null, [Validators.required, Validators.minLength(9), Validators.maxLength(15)]),
      email: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)])

    });
    this.dateConfig.containerClass = 'theme-dark-blue';
    this.dateConfig.dateInputFormat = 'MM-DD-YYYY'
  }
  
  openCadastroFormModal(template: TemplateRef<any>){
    this.cadastroFormBsModalRef = this.bsModalService.show(template,
      {class: 'modal-sl modal-dialog-centered',
      ignoreBackdropClick: true
    })
  }
  closeModalCadastroForm(): void {
    this.cadastroFormBsModalRef.hide();
  }

  createCadastro(){
    this.closeModalCadastroForm();
    // this.cadastros.push(this.cadastroForm.value);
    // this.cadastroCreated.emit(this.cadastroForm.value);//emite evento
    //
    this.cadastroService.postCadastro(this.cadastroForm.value).subscribe();
  }
}
