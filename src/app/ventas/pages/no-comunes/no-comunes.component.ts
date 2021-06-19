import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css'],
})
export class NoComunesComponent implements OnInit {
  nombre: string = 'Leonardo';

  genero: string = 'masculino';

  invitacionObj = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  clientesMap = {
    '=0': 'no tenemos ningun cliente en esperando',
    '=1': 'tenemos un cliente en esperando',
    other: 'tenemos # clientes esperando',
  };

  clientes: string[] = ['Leonardo', 'Maria', 'Paola', 'Belen'];

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  cambiarPersona() {
    if (this.genero === 'masculino') {
      this.nombre = 'Paola Vizcano';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Leonardo Chuello';
      this.genero = 'masculino';
    }
  }

  eliminarPersona() {
    this.clientes = this.clientes.slice(1);
  }
}
