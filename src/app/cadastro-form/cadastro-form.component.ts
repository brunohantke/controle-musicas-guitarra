import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent implements OnInit {

  @Input() nome!:String;
  dificuldades = ['Fácil', 'Médio', 'Difícil'];

  constructor() { }

  ngOnInit(): void {
  }

onSubmit(){
  alert('Teste');
  console.log('TESTE')
}

}
