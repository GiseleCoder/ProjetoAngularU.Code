import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../models/cadastro.model';

@Component({
  selector: 'app-pagina-adm',
  templateUrl: './pagina-adm.component.html',
  styleUrls: ['./pagina-adm.component.css']
})
export class PaginaAdmComponent implements OnInit {

  
  cadastros: Cadastro[] = []
  constructor() { }

  ngOnInit(): void {
  }

  onCadastroCreated(event: any){
    this.cadastros.push(event);
    this.cadastros.forEach((cadastros, i) => {
      cadastros.id = i + 1;
    })
    console.log(this.cadastros);
  }

}
