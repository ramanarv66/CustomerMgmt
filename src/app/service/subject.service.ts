import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor() { }

   dialogSubject:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
   tokenSubject:BehaviorSubject<string> = new BehaviorSubject<string>('');

   getDialogSubject():Observable<boolean>{
     return this.dialogSubject.asObservable();
   }
   setDialogSubject(value:boolean):void{
     this.dialogSubject.next(value);
   }
   getTokenSubject():Observable<string>{
     return this.tokenSubject.asObservable();
   }
   setTokenSubject(value:string):void{
     this.tokenSubject.next(value);
   }
}
