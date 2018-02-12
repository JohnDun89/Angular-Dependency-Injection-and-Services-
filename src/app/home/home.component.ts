import { Component, OnInit } from '@angular/core';
import { ViewChild } from "@angular/core";
import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';
import { ServiceService } from '../service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
