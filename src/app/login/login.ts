import { Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Auth } from '../service/auth';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private fb = inject(FormGroup)
  private auth = inject(Auth)

}
