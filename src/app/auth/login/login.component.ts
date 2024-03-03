import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { TeaService } from '../../data/tea.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  myForm: FormGroup;

  constructor(private authService: TeaService, private router: Router) {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })
  }

  public onLogin(): void {
    if (this.myForm.valid) {
      const { email, password } = this.myForm.value;
      this.authService.login(email, password);
      this.router.navigate(['pages']);
    }
  }
}
