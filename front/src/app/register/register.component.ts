import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  standalone:true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  public name:string | null = null;
  registerForm:FormGroup;
  constructor(private fg:FormBuilder){
    this.registerForm = this.fg.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
    this.registerForm.markAllAsTouched();
    this.registerForm.updateValueAndValidity();
  }
  onSubmit(){
    if(this.registerForm.valid){
      this.name = this.registerForm.get('name')?.value;
      console.log(this.registerForm.value);
    }else{
      console.log('Форма не валидна');
    }
  }
  onClear(){
    this.registerForm.reset();
    this.registerForm.markAllAsTouched();
    this.registerForm.updateValueAndValidity();
  }
}
