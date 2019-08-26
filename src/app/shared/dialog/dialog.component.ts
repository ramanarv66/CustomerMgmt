import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/service/subject.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private subject: SubjectService) {
    // this.subject.getDialogSubject().subscribe((value: boolean) => {
    //   this.showModal = value;
    // });
  }
  showModal: boolean = true;
  ngOnInit() {

  }
  save(): void {
    console.log('save')
  }
  close(): void {
    console.log('close')
  }
}
