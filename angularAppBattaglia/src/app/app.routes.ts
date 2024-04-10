import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { EmployeeComponent } from './features/employee/employee.component';
import { JsfakeComponent } from './features/jsfake/jsfake.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'jsdata', component: JsfakeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}

];
