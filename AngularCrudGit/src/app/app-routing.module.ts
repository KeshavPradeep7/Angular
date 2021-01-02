import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { ErrorComponent } from './employees/error/error.component';

const routes: Routes = [
  {path:'',redirectTo:'/list',pathMatch:'full'},
  {path:'list', component:ListEmployeesComponent},
  {path:'create',component:CreateEmployeeComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
