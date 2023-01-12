import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AuthLoginComponent, AuthRegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    SharedModule,
  ],
})
export class AuthModule {}
