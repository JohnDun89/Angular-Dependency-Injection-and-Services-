import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeComponent } from './home/home.component';

@Injectable()
export class ServiceService {

  constructor() { }

  upperCase(term): Observable<string> {
   const returnValue = term.toUpperCase;
    return returnValue;
  }
}
