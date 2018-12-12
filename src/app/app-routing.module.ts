import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'test', component: TestComponent },
  { path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
