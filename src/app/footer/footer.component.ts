import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  index: number;
  marcaGuitarra: string;
  marcas: string[] = ["Bora tocar numa Fender Telecaster", "Força no timbre das semiacusticas", "Pra tocar rock 70 tem que ser Gibson heim"];
  constructor() {
    this.index = Math.floor(Math.random() * (this.marcas.length - 0)) + 0
    this.marcaGuitarra = this.marcas[this.index];
  }


  ngOnInit(): void {
  }

}
