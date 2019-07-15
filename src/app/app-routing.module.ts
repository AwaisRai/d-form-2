import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './shared/components/layout/content-layout/content-layout.component';
import { content } from "./shared/routes/content-routes";
import { LoginComponent} from "./login/login.component";
import { PatientFormComponent} from "./patient-form/patient-form.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'patient-form',
    component: PatientFormComponent
  },
  {
    path: '',
    redirectTo: '/sample/sample-component',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: content
  },
  {
    path: '**',
    redirectTo: '/sample/sample-component'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
