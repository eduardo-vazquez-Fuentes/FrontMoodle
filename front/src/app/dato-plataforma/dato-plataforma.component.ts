import { Component, OnInit } from '@angular/core';
import { DatoPlataformaService } from './dato-plataforma.service';

@Component({
  selector: 'app-dato-plataforma',
  templateUrl: './dato-plataforma.component.html',
  styleUrls: ['./dato-plataforma.component.css']
})
export class DatoPlataformaComponent implements OnInit {

  dat = {statusWhatsapp: 'Activo', statusCorreo: 'Activo'};

  constructor(private DatoPlataformaSer: DatoPlataformaService) { }

  ngOnInit(): void {
    this.DatoPlataformaSer.getDatoPlataforma().subscribe(data => {console.log(data);});
  }

  agregarDatoPlataforma(){
    this.DatoPlataformaSer.createDatoPlataforma(this.dat).subscribe((data: {}) => {console.log(data);});
  }

}
