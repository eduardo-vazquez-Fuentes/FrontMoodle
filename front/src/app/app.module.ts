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
import { DatoPersonalService } from './dato-personal/dato-personal.service';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { MensajePersonaComponent } from './mensaje-persona/mensaje-persona.component';
import { AgendaComponent } from './agenda/agenda.component';

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
    MensajePersonaComponent,
    AgendaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatoPersonalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
