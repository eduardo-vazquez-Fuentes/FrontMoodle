import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HorariosComponent } from './horarios/horarios.component';
import { DatoPersonalComponent } from './dato-personal/dato-personal.component';
import { DatoPlataformaComponent } from './dato-plataforma/dato-plataforma.component';
import { CampaniaComponent } from './campania/campania.component';
import { MoodleComponent } from './moodle/moodle.component';
import { NivelAcademicoComponent } from './nivel-academico/nivel-academico.component';
import { MentorComponent } from './mentor/mentor.component';
import { MensajesComponent } from './mensajes/mensajes.component';

@NgModule({
  declarations: [
    AppComponent,
    HorariosComponent,
    DatoPersonalComponent,
    DatoPlataformaComponent,
    CampaniaComponent,
    MoodleComponent,
    NivelAcademicoComponent,
    MentorComponent,
    MensajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
