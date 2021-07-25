import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { VerificarComponent } from './verificar/verificar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginaAdmComponent } from './pagina-adm/pagina-adm.component';
import { BtnCreateCadastroComponent } from './pagina-adm/btn-create-cadastro/btn-create-cadastro.component';
import { BtnEditCadastroComponent } from './pagina-adm/btn-edit-cadastro/btn-edit-cadastro.component';
import { BtnDeleteCadastroComponent } from './pagina-adm/btn-delete-cadastro/btn-delete-cadastro.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CadastroComponent,
    VerificarComponent,
    LoginComponent,
    PaginaAdmComponent,
    BtnCreateCadastroComponent,
    BtnEditCadastroComponent,
    BtnDeleteCadastroComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
