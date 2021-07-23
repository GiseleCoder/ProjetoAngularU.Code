import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor() { }
  cadastroRealizado(nomeCadastrado: string){
    console.log(`O cadastro ${nomeCadastrado} foi concluído`)
  }
}
