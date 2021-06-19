import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pipesApp';

  nombre: string = 'LeoNaRdO JeSuS';
  valor: number = 1000;

  obj = {
    nombre: 'Leonardo',
  };

  cambiarNombre() {
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }
}
