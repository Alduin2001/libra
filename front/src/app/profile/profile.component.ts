import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule],
  standalone:true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profileForm:FormGroup;
  constructor(private fg:FormBuilder){
    this.profileForm = this.fg.group({
      name:['',[Validators.required,Validators.pattern(/^[A-z]/)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
    })
    this.profileForm.updateValueAndValidity();
    this.profileForm.markAsTouched();
  }
  onSubmit(){
    if(this.profileForm.valid){
      console.log(this.profileForm.value);
    }else{
      console.log('Форма не валидна');
    }
  }
}
