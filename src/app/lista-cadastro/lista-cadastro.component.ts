import { Musica } from './../model/musica';
import { MusicaServiceService } from './../service/musica-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-cadastro',
  templateUrl: './lista-cadastro.component.html',
  styleUrls: ['./lista-cadastro.component.css'],
  providers:[MusicaServiceService]
})
export class ListaCadastroComponent implements OnInit {

  constructor(private musicaService: MusicaServiceService) { }
  musicas!: Musica[];

  ngOnInit(): void {
    this.musicaService.getLista().subscribe((musicasLista) =>{
      console.log("Recuperou lista com sucesso")
      this.musicas = musicasLista
      console.log(this.musicas)
    },
    (erro) => {
      alert("Erro na recuperacao da lista!" + JSON.stringify(erro))
    })
  }

}
