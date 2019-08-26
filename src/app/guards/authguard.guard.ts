import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthendicateService } from '../service/authendicate.service';
import { SubjectService } from '../service/subject.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private authser: AuthendicateService, private router: Router, private subject:SubjectService ) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authser.isValidUser()) {
      return true;
    }
    else {
      this.subject.setDialogSubject(true);
      this.router.navigate(['redirect']);
      return false;
    }

  }

}
