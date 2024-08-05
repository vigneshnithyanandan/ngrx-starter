import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { UserGender } from '../store/user-state';
import { CommonModule } from '@angular/common';

interface UserForm {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  age: FormControl<number | null>;
  gender: FormControl<UserGender | null>;
}

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormComponent {
  readonly UserGender = UserGender;
  readonly userForm = new FormGroup<UserForm>({
    firstName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    lastName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    age: new FormControl(null, {
      validators: [Validators.required],
    }),
    gender: new FormControl(null, {
      validators: [Validators.required],
    }),
  });
}
