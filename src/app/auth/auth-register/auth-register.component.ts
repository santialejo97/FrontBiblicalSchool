import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.css'],
})
export class AuthRegisterComponent implements OnInit {
  public formRegister!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.formRegister = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
      confirmar: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  register() {
    this.authService.register(this.formRegister.value).subscribe(console.log);
  }

  getCampoValid(campo: string): boolean {
    if (
      this.formRegister.get(campo)?.invalid &&
      this.formRegister.get(campo)?.touched
    )
      return true;
    return false;
  }
}
