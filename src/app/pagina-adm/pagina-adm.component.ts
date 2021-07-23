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

}
