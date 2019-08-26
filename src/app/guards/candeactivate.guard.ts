
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from '@angular/core';
import { CanComponentDeactivate } from './candeactivate.component';

@Injectable()
export class CanDeactiveGuard implements CanDeactivate<CanComponentDeactivate>{
    canDeactivate(component: CanComponentDeactivate, 
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot) {

  let url: string = state.url;
  console.log('Url: '+ url);

  return component.canDeactivate ? component.canDeactivate() : true;
}

}