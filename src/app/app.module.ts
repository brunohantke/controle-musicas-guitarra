import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicDetailComponent } from './music-detail/music-detail.component';
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ListaCadastroComponent } from './lista-cadastro/lista-cadastro.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TituloComponent } from './titulo/titulo.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicDetailComponent,
    CadastroFormComponent,
    MenuComponent,
    FooterComponent,
    ListaCadastroComponent,
    VideoPlayerComponent,
    WelcomeScreenComponent,
    TituloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
