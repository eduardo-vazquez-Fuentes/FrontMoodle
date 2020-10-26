import { HorariosComponent } from './horarios/horarios.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatoPersonalComponent } from './dato-personal/dato-personal.component';
import { DatoPlataformaComponent } from './dato-plataforma/dato-plataforma.component';
import { CampaniaComponent } from './campania/campania.component';

const routes: Routes = [{path:'horarios', component:HorariosComponent},
                        {path:'datopersonal', component:DatoPersonalComponent},
                        {path:'datoplataforma', component:DatoPlataformaComponent},
                        {path:'campania', component:CampaniaComponent}
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
