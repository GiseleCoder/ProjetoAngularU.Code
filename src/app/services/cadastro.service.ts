import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cadastro } from '../models/cadastro.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(
    private http: HttpClient
  ) { }
  
  postCadastro(cadastro: Cadastro): Observable<Cadastro>{
    return this.http.post<Cadastro>('http://localhost:3000/meus', cadastro);
  }

  getCadastro(): Observable<Cadastro[]>{
    return this.http.get<Cadastro[]>('http://localhost:3000/meus')
  }

  clienteCadastrado(nomeCliente: string){
    console.log(`O cliente ${nomeCliente} foi cadastrado com sucesso`)
  }

}
