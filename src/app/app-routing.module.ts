import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';
import { ListaCadastroComponent } from './lista-cadastro/lista-cadastro.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

const routes: Routes = [
  {path:'', redirectTo:'inicio', pathMatch:'full'},
  {path:'inicio', component:WelcomeScreenComponent},
  {path:'cadastroForm', component:CadastroFormComponent},
  {path:'lista', component:ListaCadastroComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
