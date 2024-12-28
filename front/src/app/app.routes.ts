import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {
        path:"",
        title:"Главная",
        component:HomeComponent,
    },
    {
        path:"about",
        title:"О нас",
        component:AboutComponent,
        children:[
            
        ]
    },
    {
        path:"contact",
        title:"контакты",
        component:ContactsComponent
    },
    {
        path:"register",
        title:"регистрация",
        component:RegisterComponent
    },
    {
        path:"auth",
        title:"Авторизация",
        component:AuthComponent
    },
    {
        path:"profile",
        title:"Профиль",
        component:ProfileComponent
    }

];
