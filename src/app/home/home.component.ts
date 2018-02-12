import { Component, OnInit } from '@angular/core';
import { ViewChild } from "@angular/core";
import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';
import { ServiceService } from '../service.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  input: string = 'hello';
  output: Observable<string>; 

  constructor(private _service: ServiceService) { }


  ngOnInit() {
    this.output = this._service.upperCase(this.input).subscribe
  }

  

}
