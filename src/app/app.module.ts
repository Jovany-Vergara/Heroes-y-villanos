import { ListadoComponent } from './heroes/heroe/listado/listado.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ContadorComponent } from './contador/contador.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VillanosComponent } from './villanos/villanos.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    ListadoComponent,
      ContadorComponent,
      VillanosComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
