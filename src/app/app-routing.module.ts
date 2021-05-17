import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { DomainpreferenceComponent } from './domainpreference/domainpreference.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { BookletComponent } from './booklet/booklet.component';
const routes: Routes = [{path:'', component:AssessmentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
