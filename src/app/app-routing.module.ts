import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaginaAdmComponent } from './pagina-adm/pagina-adm.component';
import { VerificarComponent } from './verificar/verificar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'verificar', component: VerificarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pagina-adm', component: PaginaAdmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
