import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cadastro } from '../models/cadastro.model';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

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
  getCadastroCpf(cpf: string){
    return this.http.get(`http://localhost:3000/meus/${cpf}`)
  }
  
  editCadastro(id: number, nome: string, cpf: string, endereco: string, telefone: string, email: string): Observable<Cadastro>{
    const body = { nome: nome, cpf: cpf , endereco: endereco, telefone: telefone, email: email};
    return this.http.put<Cadastro>(`http://localhost:3000/meus/${id}`, body)
  }
  editCadastroAdm(id: number, nome: string, cpf: string, dataNascimento: string,endereco: string, telefone: string, email: string, dataRecebimento: string): Observable<Cadastro>{
    const body = { nome: nome, cpf: cpf , dataNascimento: dataNascimento, endereco: endereco, telefone: telefone, email: email, dataRecebimento: dataRecebimento};
    return this.http.put<Cadastro>(`http://localhost:3000/meus/${id}`, body)
  }

  deleteCadastro(id: number){
    return this.http.delete(`http://localhost:3000/meus/${id}`)
  }
  clienteCadastrado(nomeCliente: string){
    console.log(`O cliente ${nomeCliente} foi cadastrado com sucesso`)
  }


}
