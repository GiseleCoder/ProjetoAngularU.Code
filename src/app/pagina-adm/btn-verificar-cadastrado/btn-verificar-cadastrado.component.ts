import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-verificar-cadastrado',
  templateUrl: './btn-verificar-cadastrado.component.html',
  styleUrls: ['./btn-verificar-cadastrado.component.css']
})
export class BtnVerificarCadastradoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // openVerificarFormModal(template: TemplateRef<any>) {
  //   this.verificarFormBsModalRef = this.bsModalService.show(template, {
  //     class: 'modal-sl modal-dialog-centered',
  //     ignoreBackdropClick: true
  //   })
  //   this.verificarForm.reset();
  // }

}


