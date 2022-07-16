import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css']
})
export class WelcomeScreenComponent implements OnInit {

  titulo:string = 'Bem vindo Guitarrista!!!'

  constructor() { }

  ngOnInit(): void {
  }

}
