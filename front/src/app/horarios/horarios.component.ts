import { Component, OnInit } from '@angular/core';
import { HorariosService } from './horarios.service';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {

  dat = {dia: 2020-10-29};

  constructor(private HorariosSer: HorariosService) { }

  ngOnInit(): void {
    this.HorariosSer.getHorarios().subscribe(data => {console.log(data)});
  }

  agregarHorarios(){
    this.HorariosSer.createHorarios(this.dat).subscribe((data: {}) => {console.log(data);});
  }

}
