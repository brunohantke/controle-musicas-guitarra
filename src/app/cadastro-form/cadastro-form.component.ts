import { MusicaServiceService } from './../service/musica-service.service';
import { Musica } from './../model/musica';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css'],
  providers:[MusicaServiceService]
})
export class CadastroFormComponent implements OnInit {

  musicas?:Musica[];

  formMusica!: FormGroup;

  @Input() nome!:String;
  dificuldades = ['Fácil', 'Médio', 'Difícil'];

  constructor(private formBuilder: FormBuilder, private musicasService:MusicaServiceService) { }

  ngOnInit(): void {
    this.criarFormulario(new Musica());
  }

onSubmit(){

  if(!this.formMusica.valid){
    return;
  }

  this.musicasService.save(this.formMusica.value).subscribe(
    (sucesso) =>(
      alert("Gravado com sucesso")
    ),
    (erro) => {
      alert("Erro na gravacao!" + JSON.stringify(erro))
    }
  );
}

criarFormulario(musica: Musica) {
  this.formMusica = this.formBuilder.group({
    id: null,
    nomeMusica: [musica.nomeMusica],
    nomeBanda: [musica.nomeBanda],
    dificuldades:[musica.dificuldade],
    tempo:[musica.tempo],
    urlImagem:[musica.urlImagem]
  });
}

}
