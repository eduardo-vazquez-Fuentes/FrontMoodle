import { Component, OnInit } from '@angular/core';
import { DatoPersonal } from './dato-personal';
import { DatoPersonalService } from './dato-personal.service';

@Component({
  selector: 'app-dato-personal',
  templateUrl: './dato-personal.component.html',
  styleUrls: ['./dato-personal.component.css']
})
export class DatoPersonalComponent implements OnInit {

  personal: any = {};
  dat = {nombre: 'Abraham', apellido: 'Cruz'};

  public datoPersonal: DatoPersonal = new DatoPersonal();
  idDatoPersonal: any = [];
  validandoDatoPersonal = false;
  validandoidMoodles = false;
  validandoidNivelAcademico = false;
  validandoidCampanias = false;
  result= ' ';

  constructor(private DatoPersonalSer: DatoPersonalService) { }

  ngOnInit(){
    // this.DatoPersonalSer.getDatoPersonal().subscribe(data => {
    //   this.personal = data;
    //   console.log(this.personal)});
    this.DatoPersonalSer.getDatoPersonal().subscribe((data: string) => {
      this.personal = JSON.parse(data);
    });
  }

  // agregarDatoPersonal(){
  //   this.DatoPersonalSer.createDatoPersonal(this.dat).subscribe((data: {}) => {console.log(data);});
  // }

  // agregarDatoPersonal() {
  //   this.DatoPersonalSer.createDatoPersonal(this.datoPersonal).subscribe((data: {}) => {
  //     this.idDatoPersonal = data;
  //     console.log(this.idDatoPersonal);
  //     this.validandoDatoPersonal = true;
  //   });
  //   setTimeout(() => {
  //     if (this.idDatoPersonal.id !== 0) {
  //       // this.agregarInsumo();
  //       // this.agregarTrabajador();
  //     }
  //   }, 500);
  // }

  agregarDatoPersonal(){
    let dat: any;
    let result: any;
    dat = {"nombre": 'Abraham', "apellido": 'Cruz'};
    this.result = result;
    // result = JSON.parse(dat);
    this.DatoPersonalSer.createDatoPersonal(dat).subscribe(data => {
      this.DatoPersonalSer.getDatoPersonal();
      console.log(data);
    });
  }

}
