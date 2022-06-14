import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicDetailComponent } from './music-detail/music-detail.component';
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicDetailComponent,
    CadastroFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
