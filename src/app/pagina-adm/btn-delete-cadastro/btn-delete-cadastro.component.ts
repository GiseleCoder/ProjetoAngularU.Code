import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Cadastro } from 'src/app/models/cadastro.model';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-btn-delete-cadastro',
  templateUrl: './btn-delete-cadastro.component.html',
  styleUrls: ['./btn-delete-cadastro.component.css']
})
export class BtnDeleteCadastroComponent implements OnInit {


  @Input() cadastro!: Cadastro;
  cadastroFormBsModalRef!: BsModalRef;
  
  cadastroForm: FormGroup = new FormGroup({
    titulo: new FormControl(),
    conteudo: new FormControl()
  });

  constructor(
    private bsModalService: BsModalService,
    private cadastroService: CadastroService
  ) { }

  ngOnInit(): void {
  }
  openCadastroFormModal(template: TemplateRef<any>) {
    this.cadastroFormBsModalRef = this.bsModalService.show(template, {
      class: 'modal-xl modal-dialog-centered',
      ignoreBackdropClick: true,
      keyboard: false
    });
  }
  closeModalCardForm(): void {
    this.cadastroForm.reset();
    this.cadastroFormBsModalRef.hide();
  }

  deleteCadastro() { 
    this.closeModalCardForm();
    this.cadastroService.deleteCadastro(this.cadastro.id).subscribe(cadastro =>{
      alert("Cliente deletado")
    })
  }
 

}
