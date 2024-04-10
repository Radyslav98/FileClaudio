import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './features/home/home.component';
import { EmployeeComponent } from './features/employee/employee.component';
import { NavbarComponent } from './core/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[FormsModule, CommonModule,HomeComponent,EmployeeComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

  // template: `<h1 style="color: blueviolet;">Start progetto angular: {{title}}</h1> `,
  // styles: `h1{
  //   background-color: aquamarine;
  // }
  // `
})

export class AppComponent {
  title = 'aca5start';
  fullName: string = 'Claudio Orloff';
  age: number = 51;
  isDisable: boolean = false;
  what: any;
  testTwoWay: string = 'Bruce Banner';
  isExist: boolean=true;
  badStyle: string = 'color: black;';
  goodStyle: string = 'color: green;';
  neutralStyle: string = 'color: orange;';
  numberLists: number[] = [3,9,27,81];
  backColor: number = 0;
  color: number=0;
  wState: number = 0;
  fromFather= 'Parigi';


  jsonWhat: any[] = [
    {nome: "Martin",cognome: "Mystere", state: "Good"},
    {nome: "Serghej",cognome: "Orloff", state: "Bad"},
    {nome: "Diana",cognome: "Lombard", state: "Good"},
    {nome: "Java",cognome: "Java", state: "Neutral"},
  ]

  Welcome(msg: string,age: number ){
    console.log("Chiamata tramite Event Binding.Benvenuto, " + msg +',' + age)
  }

  RandomizeStyle()
  {
    this.backColor +=1;
    this.color +=1;
    this.wState +=1;
  }
}
