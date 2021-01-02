import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  gender='male'
  // isActive=true
  constructor() { }

  ngOnInit() {
  }

  saveEmployee(empForm:NgForm){
    console.log(empForm.value)
  }
}
