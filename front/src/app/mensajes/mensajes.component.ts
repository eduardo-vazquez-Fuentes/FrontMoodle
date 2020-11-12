import { Component, OnInit } from '@angular/core';
import { MensajesService } from './mensajes.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  dat = {descripcionCorta: 'Prueba2', mensaje: 'Prueba2'};

  constructor(private MensajesSer: MensajesService) { }

  ngOnInit(): void {
    this.MensajesSer.getMensajes().subscribe(data => {console.log(data)});
  }

  agregarMensajes(){
    this.MensajesSer.createMensajes(this.dat).subscribe((data: {}) => {console.log(data);});
  }

}
