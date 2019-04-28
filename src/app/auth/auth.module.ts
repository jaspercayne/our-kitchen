import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SignUpComponent,
    SignInComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent
  ],
  providers: [AuthService]
})
export class AuthModule { }
