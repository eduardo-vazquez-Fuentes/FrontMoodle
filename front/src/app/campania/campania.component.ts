import { Component, OnInit } from '@angular/core';
import { CampaniaService } from './campania.service';

@Component({
  selector: 'app-campania',
  templateUrl: './campania.component.html',
  styleUrls: ['./campania.component.css']
})
export class CampaniaComponent implements OnInit {

  dat = {nombreCampania: 'Prueba2', descripcion: 'Prueba2'};

  constructor(private CampaniaSer: CampaniaService) { }

  ngOnInit(): void {
    this.CampaniaSer.getCampania().subscribe(data => {console.log(data)});
  }

  agregarCampania(){
    this.CampaniaSer.createCampania(this.dat).subscribe((data: {}) => {console.log(data);});
  }

}
