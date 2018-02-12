import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ServiceService {

  constructor() { }

  upperCase(term): Observable<string> {
   const returnValue = term.toUpperCase;
    return returnValue;
  }
}
