import { Component} from '@angular/core';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})

export class HeroeComponent {
  nombre = 'Saitama';
  edad = 20;

  obtenerNombre(): string{
    return this.nombre + ' - ' + this.edad;
  }
  cambiarNombre(): void{
    this.nombre  = 'Batman';

  }
  cambiarEdad(): void {
    this.edad  = 32;
  }
  get nombreMayusculas(): string{
    return this.nombre.toUpperCase();
  }
}
