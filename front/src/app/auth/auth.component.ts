import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-auth',
  imports: [ReactiveFormsModule],
  standalone:true,
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  authForm:FormGroup;
  constructor(private fg:FormBuilder){
    this.authForm = this.fg.group({
      email:['',Validators.email],
      password:['',Validators.minLength(6)]
    })
  }
  onSubmit(){
    if(this.authForm.valid){
      console.log(this.authForm.value);
      window.location.href = "http://localhost:4200/";
    }else{
      console.log('Форма не валидна');
    }
  }
  onClear(){
    this.authForm.reset();
  }
}
