import { AgendaComponent } from './agenda/agenda.component';
import { MensajePersonaComponent } from './mensaje-persona/mensaje-persona.component';
import { HorariosComponent } from './horarios/horarios.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
                        {path:'horarios', component:HorariosComponent},
                        {path: 'mesnaje-personal', component:MensajePersonaComponent},
                        {path: 'agenda',component:AgendaComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
