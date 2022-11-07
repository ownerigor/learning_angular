import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  show : Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showMessage() : void {
    this.show = !this.show; // Caracter ! significa toggle, sempre que executar o evento irá passar um valor inverso ao que está.
  }

}
