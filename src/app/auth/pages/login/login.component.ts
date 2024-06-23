import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomHeaderComponent } from '../../../shared/components/custom-header/custom-header.component';
import { ValidatorService } from '../../../shared/services/validators.service';

@Component({
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    CustomHeaderComponent,
  ],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

  private validatorService = inject(ValidatorService)
  private router = inject(Router)
  private fb = inject(FormBuilder);
  public loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })
  public loginElements = computed(() => Object.keys(this.loginForm.controls))

  public isValidField(field: string) {
    return this.validatorService.isValidField(this.loginForm, field);
  }

  public onSubmit() {

    if(this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    console.log(this.loginForm.value)
  }

  public goToRegister() {
    this.router.navigate(['/auth/register'])
  }

}
