import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css'],
})
export class NumerosComponent {
  ventasNetas: number = 1234567.1234;
  porcentaje: number = 0.4856;
}
