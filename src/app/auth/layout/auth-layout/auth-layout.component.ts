import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './auth-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayoutComponent implements OnInit {


  ngOnInit(): void {

    console.log(Object.keys(this.loginForm.controls))

  }
  private fb = inject(FormBuilder);
  public loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })
  public loginElements = computed(() => Object.keys(this.loginForm.controls))


  public onSubmit() {

    console.log('errores', this.loginForm.errors)

    if(this.loginForm.invalid) return

    console.log(this.loginForm.value)
  }

}
