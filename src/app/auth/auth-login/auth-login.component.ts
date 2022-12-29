import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observer } from 'rxjs';
import { ResponseAuth } from 'src/app/interfaces/auth.interfaces';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css'],
})
export class AuthLoginComponent implements OnInit {
  public formLogin: FormGroup;

  private observer: Observer<ResponseAuth> = {
    next: (value: ResponseAuth) => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Bienvenidso',
        showConfirmButton: false,
        timer: 1000,
      });
    },
    error: (err: HttpErrorResponse) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.error.message,
      });
    },
    complete: () => {},
  };

  constructor(private fb: FormBuilder, private authServices: AuthService) {
    this.formLogin = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
    console.log('soy el primero');
  }

  login() {
    this.authServices.login(this.formLogin.value).subscribe(this.observer);
  }
}
