import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EmployeeData } from '../../shared/models/employeedata';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  enrollNumber: string =''
  fullName: string =''
  newEmployee: EmployeeData = new EmployeeData();
  employees: EmployeeData[]=[]

  Confirm(enroll: HTMLInputElement, fName: HTMLInputElement)
  {
      if (enroll.value != '' && fName.value != '')
        {
          this.enrollNumber = enroll.value;
          this.fullName = fName.value;
        }
        else
          alert('Dati incompleti !!!')
  }

  FindEnroll(enroll: HTMLInputElement)
  {
    alert('Si potrebbe avviare la ricerca di una matricola: ' + enroll.value)
  }

  InsertEmployee(frm: NgForm)
  {
    this.newEmployee.enrollmentNumber = frm.value.matricola;
    this.newEmployee.fullName = frm.value.nominativo;
    this.newEmployee.qualifier = frm.value.qualifica;
    this.newEmployee.activity = frm.value.attivita;
    this.newEmployee.age = frm.value.age;
    console.log(this.newEmployee)

    // httpost
    // this.employees.push(frm.value)
    // console.log(this.employees)
  }
}
