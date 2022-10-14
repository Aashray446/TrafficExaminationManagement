import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { logInRoutingModule } from './log-in-routing.module';



@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    logInRoutingModule,
    CommonModule
  ]
})
export class LogInModule { }
