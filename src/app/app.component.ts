import { Component } from '@angular/core';
import { SubjectService } from './service/subject.service';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custmgmnt';
  showDialog:boolean = false;
  constructor(private subject:SubjectService){
    this.subject.getDialogSubject().subscribe((value:boolean)=>{
      this.showDialog = value;
    });
  }
}
