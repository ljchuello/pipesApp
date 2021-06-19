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

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  clientes: string[] = ['Leonardo', 'Maria', 'Paola', 'Belen'];

  clientesMap = {
    '=0': 'no tenemos ningun cliente en esperando',
    '=1': 'tenemos un ningun cliente en esperando',
    other: 'tenemos # clientes esperando',
  };
}
