import { Component, OnInit } from '@angular/core';
import { AuthendicateService } from '../service/authendicate.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authservice:AuthendicateService) { 
    this.authservice.logOut();
  }

  ngOnInit() {
  }

}
