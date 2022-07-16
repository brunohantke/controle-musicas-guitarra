import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Musica } from './../model/musica';
import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';

@Injectable()
export class MusicaServiceService {

  private endpoint:String = 'http://localhost:3000/musicas';

  // musicas!: Musica[];

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  // private musicaSource!: BehaviorSubject<number>;

  constructor(private httpClient: HttpClient) {
    // localStorage.setItem("musicas", JSON.stringify([]));
    // this.musicas = JSON.parse(localStorage.getItem("musicas")!);
    // this.musicaSource = new BehaviorSubject<number>(this.musicas.length);
  }

  save(musica: Musica){
      return this.httpClient.post(`${this.endpoint}`, musica).pipe(take(1));
    }

  getLista(){
    return this.httpClient.get<Musica[]>(`${this.endpoint}`);
  }
}
