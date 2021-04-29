import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ['Pocholatita', 'Hulk', 'Saitama', 'Superman', 'Thor', 'Goku', 'Vegeta'];
  villanos: string [] = ['Joker', 'Magneto', 'Black Goku', 'Galactus', 'Thanos'];
  heroDeleted = '';
  villanoDeleted = '';

  delete(index: number): void {
    console.log(`heroes: ${index}`);
    this.heroDeleted = this.heroes[index];
    delete this.heroes[index];
  }
  deletes(index: number): void {
    console.log(`villanos: ${index}`);
    this.villanoDeleted = this.villanos[index];
    delete this.villanos[index];
  }
}
