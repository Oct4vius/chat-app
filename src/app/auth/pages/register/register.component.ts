import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorService } from '../../../shared/services/validators.service';
import { CustomHeaderComponent } from '../../../shared/components/custom-header/custom-header.component';

interface ControlNames {
  'first name': string;
  'last name': string;
  email: string;
  password: string;
  'confirm password': string;
}

@Component({
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    CustomHeaderComponent,
  ],
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private validatorService = inject(ValidatorService);

  public registerForm = this.fb.group(
    {
      'first name': ['', Validators.required],
      'last name': ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      'confirm password': ['', [Validators.required, Validators.minLength(6)]],
    },
    {
      validators: [
        this.validatorService.isFieldOneEqualsFieldTwo(
          'password',
          'confirm password'
        ),
      ],
    }
  );

  public registerElements = computed(() =>
    Object.keys(this.registerForm.controls)
  );

  public isValidField(field: string) {
    return this.validatorService.isValidField(this.registerForm, field);
  }

  public onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    };

    console.log(this.registerForm.value);
  }

  public goToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
