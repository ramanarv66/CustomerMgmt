import { Component, OnInit } from '@angular/core';
import { AuthendicateService } from '../service/authendicate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authservice:AuthendicateService) { 
    
  }

  ngOnInit() {
  }

}
