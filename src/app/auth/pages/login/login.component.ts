import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

  private router = inject(Router)
  private fb = inject(FormBuilder);
  public loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })
  public loginElements = computed(() => Object.keys(this.loginForm.controls))


  public onSubmit() {

    if(this.loginForm.invalid) return

    console.log(this.loginForm.value)
  }

  public goToRegister() {
    this.router.navigate(['/auth/register'])
  }

}
