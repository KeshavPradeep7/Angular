import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees:Employee[]=[
    {
    id:1,
    name:'Pradeep',
    gender:'Male',
    contactPreference:'email',
    email:'pradeep@gail.com',
    dateOfBirth:new Date('07/06/1989'),
    department:'IT',
    isActive:true,
    phoneNumber:9535722138,
    photoPath:'assets/images/Pradeep.jpg'
    },

    {
      id:2,
      name:'Akshatha',
      gender:'Female',
      contactPreference:'email',
      email:'ashathan@gail.com',
      dateOfBirth:new Date('07/18/1991'),
      department:'Law',
      isActive:true,
      phoneNumber:9036421621,
      photoPath:'assets/images/Loli.jpg'
      },
      {
        id:3,
        name:'Chobi',
        gender:'Male',
        contactPreference:'email',
        email:'avyukth@gail.com',
        dateOfBirth:new Date('05/20/2017'),
        department:'Baby Sitting',
        isActive:true,
        photoPath:'assets/images/Chobi.jpg'
        }
]
  constructor() { }

  ngOnInit() {
  }

}
