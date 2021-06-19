import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

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

  persona = {
    nombre: 'leonardo',
    edad: 29,
    direccion: 'Quito, Ecuador',
  };

  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Iroman',
      vuela: true,
    },
    {
      nombre: 'Batman',
      vuela: false,
    },
  ];

  miObservable = interval(5000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });

  constructor(private primengConfig: PrimeNGConfig) {}
}
