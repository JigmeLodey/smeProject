import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './auth.service';
import {NotifierService} from 'angular-notifier';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class AuthComponent implements OnInit {
  loginMein = true;
  loginForm: FormGroup;
  signUpClick = false;
  signUpForm: FormGroup;
  loginChecker: boolean;
  indexing: number;
  leng: number;
  forgotForm: FormGroup;
  private readonly notifier: NotifierService;
  private SignUpChecker: boolean;
  forgot = false;

  constructor(private formBuilder: FormBuilder,
              private service: AuthService,
              private notifierService: NotifierService,
              private route: Router) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.loginFormBuilder();
    this.signUpFormBuilder();
    this.forgotFormBuild();
  }

  loginFormBuilder(): void {
    this.loginForm = this.formBuilder.group({
      email: [undefined, [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      password: [undefined, [Validators.required]]
    });
  }

  forgotFormBuild() {
    this.forgotForm = this.formBuilder.group({
      email: [undefined, [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]]
    });
  }

  signUpFormBuilder(): void {
    this.signUpForm = this.formBuilder.group({
      name: [undefined, Validators.required],
      email: [undefined, [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      password: [undefined, [Validators.required]],
      gender: [undefined, Validators.required],
      number: [undefined, Validators.required],
      role: ['member'],
    });
  }

  home(): void {

  }

  onSubmit() {
   if (this.forgotForm.valid) {
     this.service.onRequest(this.forgotForm.value).subscribe(response => {
       if (response) {
         this.notifier.notify('success', 'Request Sent');
       }
     });
   }
  }

  onLogin(): void {
    this.service.getAuth().subscribe(res => {
      this.leng = Object.keys(res).length;
      for (let i = 0; i < this.leng; i++) {
        if (res[i].email === this.loginForm.value.email && res[i].password === this.loginForm.value.password) {
          this.loginChecker = true;
          this.indexing = i;
          break;
        } else {
          this.loginChecker = false;
        }
      }
      if (this.loginChecker) {
        if (res[this.indexing].role === 'admin') {
          this.route.navigate(['/admin']);
        } else {
          this.route.navigate(['/user']);
        }
      } else {
        this.notifier.notify('error', 'Invalid email or password');
      }
    });
  }

  onForgot() {
    this.loginMein = false;
    this.signUpClick = false;
    this.forgot = true;
  }

  onSignUp(): void {
    this.signUpClick = true;
    this.loginMein = false;
    this.forgot = false;
  }

  haveAccount(): void {
    this.loginMein = true;
    this.signUpClick = false;
    this.forgot = false;
  }

  register() {
    this.service.getAuth().subscribe(res => {
      this.leng = Object.keys(res).length;
      for (let i = 0; i < this.leng; i++) {
        if (res[i].email === this.signUpForm.value.email) {
          this.SignUpChecker = false;
        } else {
          this.SignUpChecker = true;
        }
      }
      if (this.SignUpChecker) {
        this.service.onPostSignUp(this.signUpForm.value).subscribe(response => {
          if (response) {
            this.signUpClick = false;
            this.loginMein = true;
            this.notifier.notify('success', 'Create Success');
            this.signUpForm.reset();
          } else {
            this.notifier.notify('error', 'Account create fail');
          }
        });
      } else {
        this.notifier.notify('error', 'Email already exist');
      }
    });
  }
}


