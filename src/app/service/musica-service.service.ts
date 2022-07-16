import { Musica } from './../model/musica';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MusicaServiceService {

  musicas!: Musica[];

  private musicaSource!: BehaviorSubject<number>;

  constructor() {
    localStorage.setItem("musicas", JSON.stringify([]));
    this.musicas = JSON.parse(localStorage.getItem("musicas")!);
    this.musicaSource = new BehaviorSubject<number>(this.musicas.length);
  }
    save(musica: Musica) {
      this.musicas = JSON.parse(localStorage.getItem("musicas")!);
      console.log(this.musicas)
      musica.id = this.musicas.length + 1
      this.musicas.push(musica);
      localStorage.setItem("musicas", JSON.stringify(this.musicas));
    }
}
