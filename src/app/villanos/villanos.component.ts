import { Villano } from './../villan';
import { MessageService } from './../messages.service';
import { Component, OnInit } from '@angular/core';

import {VillanService} from '../villan.service';

@Component({
  selector: 'app-villanos',
  templateUrl: './villanos.component.html',
  styleUrls: ['./villanos.component.css']
})
export class VillanosComponent implements OnInit {

selectedVillano?: Villano;

villanos: Villano[] = [];
constructor(private villanService: VillanService, private messageService: MessageService) { }

ngOnInit(): void {
  this.getVillanos();
}

onSelect(villano: Villano): void {
  this.selectedVillano = villano;
  this.messageService.add(`HeroesComponent: Selected villan id=${villano.id}`);
  console.log(this.messageService);
}

onPlus(villanos: Villano): void {
  villanos.nivel = villanos.nivel + 1;
}
getVillanos(): void {
  this.villanService.getVillanos()
      .subscribe(villanos => this.villanos = villanos);
}
}
