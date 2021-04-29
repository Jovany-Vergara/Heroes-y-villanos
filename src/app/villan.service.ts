import { Injectable } from '@angular/core';
import { Villano } from './villan';
import { VILLANOS } from './mock-villan';
import { Observable, of } from 'rxjs';
import { MessageService } from './messages.service';

@Injectable({
  providedIn: 'root',
})
export class VillanService {

    getVillanos(): Observable<Villano[]> {
    const heroes = of(VILLANOS);
    this.messagesService.add('HeroService: fetched heroes');
    return heroes;
  }
  constructor(private messagesService: MessageService) { }
}
