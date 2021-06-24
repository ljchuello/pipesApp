import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Color, Heroe} from "../../interfaces/ventas.interfaces";

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css'],
})
export class OrdenarComponent implements OnInit {
  mayuscula: boolean = true;

  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.Azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.Negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.Verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.Rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.Verde
    }
  ];

  items: MenuItem[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh'
      },
      {
        label: 'Delete',
        icon: 'pi pi-times'
      },
      {
        label: 'Angular',
        icon: 'pi pi-external-link',
        // url: 'http://angular.io'
      },
      {
        label: 'Router',
        icon: 'pi pi-upload',
        // routerLink: '/fileupload'
      }
    ];
  }

  cambiar() {
    this.mayuscula = !this.mayuscula;
  }

  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
  }
}
