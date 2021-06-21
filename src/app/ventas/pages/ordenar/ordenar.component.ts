import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css'],
})
export class OrdenarComponent implements OnInit {
  mayuscula: boolean = true;

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
    if (this.mayuscula) {
      this.mayuscula = false;
    } else {
      this.mayuscula = true;
    }
  }
}
