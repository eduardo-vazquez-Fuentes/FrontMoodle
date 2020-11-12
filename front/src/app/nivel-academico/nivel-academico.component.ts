import { Component, OnInit } from '@angular/core';
import { NivelAcademicoService } from './nivel-academico.service';

@Component({
  selector: 'app-nivel-academico',
  templateUrl: './nivel-academico.component.html',
  styleUrls: ['./nivel-academico.component.css']
})
export class NivelAcademicoComponent implements OnInit {

  dat = {nivelAcademico: 'Superior'};

  constructor(private NivelAcademicoSer: NivelAcademicoService) { }

  ngOnInit(): void {
    this.NivelAcademicoSer.getNivelAcademico().subscribe(data => {console.log(data)});
  }

  agregarNivelAcademico(){
    this.NivelAcademicoSer.createNivelAcademico(this.dat).subscribe((data: {}) => {console.log(data);});
  }

}
