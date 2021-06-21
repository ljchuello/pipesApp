import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css'],
})
export class OrdenarComponent implements OnInit {
  mayuscula: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  cambiar() {
    if (this.mayuscula) {
      this.mayuscula = false;
    } else {
      this.mayuscula = true;
    }
  }
}
