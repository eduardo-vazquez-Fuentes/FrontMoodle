import { Component, OnInit } from '@angular/core';
import { MoodleService } from './moodle.service';

@Component({
  selector: 'app-moodle',
  templateUrl: './moodle.component.html',
  styleUrls: ['./moodle.component.css']
})
export class MoodleComponent implements OnInit {

  dat = {usuario: 'Samuel', password: '12345'};

  constructor(private MoodleSer: MoodleService) { }

  ngOnInit(): void {
    this.MoodleSer.getMoodle().subscribe(data => {console.log(data)});
  }

  agregarMoodle(){
    this.MoodleSer.createMoodle(this.dat).subscribe((data: {}) => {console.log(data);});
  }

}
