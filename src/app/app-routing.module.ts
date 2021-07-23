import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AboutComponent } from './home/about/about.component';
import { LoginComponent } from './login/login.component';
import { VerificarComponent } from './verificar/verificar.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'verificar', component: VerificarComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
