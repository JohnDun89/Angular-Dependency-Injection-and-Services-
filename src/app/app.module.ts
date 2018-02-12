import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
