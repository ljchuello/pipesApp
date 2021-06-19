import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent {
  nombreLower: string = 'leonardo';
  nombreUpper: string = 'LEONARDO';
  nombreCompleto: string = 'lEoNaRdO ChUelLo';
  fecha: Date = new Date();

  ngAfterContentChecked() {
    setInterval(() => {
      this.fecha = new Date();
    }, 1);
  }
}
