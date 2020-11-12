import { Component, OnInit } from '@angular/core';
import { MentorService } from './mentor.service';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {

  dat = {nombre: 'Abraham', apellido: 'Cruz', horas:'05:00:00', correo:'abra@gmail.com'};

  constructor(private MentorSer: MentorService) { }

  ngOnInit(): void {
    this.MentorSer.getMentor().subscribe(data => {console.log(data)});
  }

  agregarMentor(){
    this.MentorSer.createMentor(this.dat).subscribe((data: {}) => {console.log(data);});
  }

}
